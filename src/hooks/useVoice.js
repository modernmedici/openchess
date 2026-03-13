import { useState, useRef, useCallback } from 'react'

function playTick() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()

    const thud = ctx.createOscillator()
    const thudGain = ctx.createGain()
    thud.type = 'sine'
    thud.frequency.setValueAtTime(180, ctx.currentTime)
    thud.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.06)
    thudGain.gain.setValueAtTime(0.6, ctx.currentTime)
    thudGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12)
    thud.connect(thudGain)
    thudGain.connect(ctx.destination)
    thud.start(ctx.currentTime)
    thud.stop(ctx.currentTime + 0.12)

    const click = ctx.createOscillator()
    const clickGain = ctx.createGain()
    click.type = 'square'
    click.frequency.setValueAtTime(900, ctx.currentTime)
    click.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.03)
    clickGain.gain.setValueAtTime(0.25, ctx.currentTime)
    clickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04)
    click.connect(clickGain)
    clickGain.connect(ctx.destination)
    click.start(ctx.currentTime)
    click.stop(ctx.currentTime + 0.04)

    setTimeout(() => ctx.close(), 300)
  } catch {
    // Web Audio not available
  }
}

// Kokoro TTS state — module-level so it persists across re-renders
let kokoroTTS = null
let kokoroStatus = 'idle' // 'idle' | 'loading' | 'ready' | 'error'

export function useVoice() {
  const [isMuted, setIsMuted] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const isMutedRef = useRef(false)
  const pendingRef = useRef(null)
  const currentAudioRef = useRef(null)
  const currentUrlRef = useRef(null)

  // Keep ref in sync so callbacks always see current mute state
  const setMuted = (val) => {
    isMutedRef.current = val
    setIsMuted(val)
  }

  const stopCurrentAudio = useCallback(() => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause()
      currentAudioRef.current.src = ''
      currentAudioRef.current = null
    }
    if (currentUrlRef.current) {
      URL.revokeObjectURL(currentUrlRef.current)
      currentUrlRef.current = null
    }
  }, [])

  const speakWithKokoro = useCallback(async (text, { onEnd } = {}) => {
    if (isMutedRef.current) { onEnd?.(); return }

    try {
      const audio = await kokoroTTS.generate(text, { voice: 'af_heart' })
      if (isMutedRef.current) { onEnd?.(); return }

      const blob = await audio.toBlob()
      const url = URL.createObjectURL(blob)

      stopCurrentAudio()
      if (isMutedRef.current) {
        URL.revokeObjectURL(url)
        onEnd?.()
        return
      }

      const audioEl = new Audio(url)
      currentAudioRef.current = audioEl
      currentUrlRef.current = url

      audioEl.onended = () => {
        URL.revokeObjectURL(url)
        if (currentUrlRef.current === url) currentUrlRef.current = null
        if (currentAudioRef.current === audioEl) currentAudioRef.current = null
        onEnd?.()
      }
      audioEl.onerror = () => {
        URL.revokeObjectURL(url)
        if (currentUrlRef.current === url) currentUrlRef.current = null
        if (currentAudioRef.current === audioEl) currentAudioRef.current = null
        onEnd?.()
      }

      await audioEl.play()
    } catch (err) {
      console.warn('Kokoro TTS error, falling back to speechSynthesis:', err)
      speakWithFallback(text, { onEnd })
    }
  }, [stopCurrentAudio])

  const speakWithFallback = useCallback((text, { onEnd } = {}) => {
    if (isMutedRef.current) { onEnd?.(); return }
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.9
    utterance.pitch = 1.0
    utterance.volume = 1.0
    utterance.onend = () => onEnd?.()
    utterance.onerror = () => onEnd?.()
    window.speechSynthesis.speak(utterance)
  }, [])

  const speak = useCallback((text, { onEnd } = {}) => {
    // Cancel anything in flight
    window.speechSynthesis?.cancel()
    stopCurrentAudio()
    clearTimeout(pendingRef.current)

    if (isMutedRef.current) {
      onEnd?.()
      return
    }

    // Lazily initialize Kokoro on first speak call
    if (kokoroStatus === 'idle') {
      kokoroStatus = 'loading'
      import('kokoro-js').then(({ KokoroTTS }) => {
        return KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0', {
          dtype: 'q8',
          device: 'wasm',
          progress_callback: (info) => {
            if (info.status === 'progress' && info.total) {
              const pct = Math.round((info.loaded / info.total) * 100)
              setLoadingProgress(pct)
            } else if (info.status === 'done') {
              setLoadingProgress(100)
            }
          },
        })
      }).then((tts) => {
        kokoroTTS = tts
        kokoroStatus = 'ready'
        setLoadingProgress(100)
      }).catch((err) => {
        console.warn('Kokoro failed to initialize, using speechSynthesis:', err)
        kokoroStatus = 'error'
      })
    }

    pendingRef.current = setTimeout(() => {
      if (isMutedRef.current) { onEnd?.(); return }

      if (kokoroStatus === 'ready') {
        speakWithKokoro(text, { onEnd })
      } else if (kokoroStatus === 'loading') {
        // Poll until ready (max ~30s)
        let attempts = 0
        const poll = setInterval(() => {
          attempts++
          if (isMutedRef.current) { clearInterval(poll); onEnd?.(); return }
          if (kokoroStatus === 'ready') {
            clearInterval(poll)
            speakWithKokoro(text, { onEnd })
          } else if (kokoroStatus === 'error' || attempts > 60) {
            clearInterval(poll)
            speakWithFallback(text, { onEnd })
          }
        }, 500)
      } else {
        speakWithFallback(text, { onEnd })
      }
    }, 350)
  }, [speakWithKokoro, speakWithFallback, stopCurrentAudio])

  const tick = useCallback(() => playTick(), [])

  const toggleMute = useCallback(() => {
    const next = !isMutedRef.current
    if (next) {
      window.speechSynthesis?.cancel()
      stopCurrentAudio()
      clearTimeout(pendingRef.current)
    }
    setMuted(next)
  }, [stopCurrentAudio])

  return { speak, tick, isMuted, toggleMute, loadingProgress }
}
