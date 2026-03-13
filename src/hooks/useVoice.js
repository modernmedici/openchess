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

export function useVoice() {
  const [isMuted, setIsMuted] = useState(false)
  const isMutedRef = useRef(false)
  const pendingRef = useRef(null)
  const currentAudioRef = useRef(null)

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
  }, [])

  // speak(audioPath, { onEnd }) — plays a pre-baked WAV from /audio/*.wav
  // Falls back to speechSynthesis if the file fails to load.
  const speak = useCallback((audioPath, { onEnd, fallbackText } = {}) => {
    stopCurrentAudio()
    clearTimeout(pendingRef.current)

    if (isMutedRef.current) {
      onEnd?.()
      return
    }

    pendingRef.current = setTimeout(() => {
      if (isMutedRef.current) { onEnd?.(); return }

      const audio = new Audio(audioPath)
      currentAudioRef.current = audio

      audio.onended = () => {
        if (currentAudioRef.current === audio) currentAudioRef.current = null
        onEnd?.()
      }
      audio.onerror = () => {
        if (currentAudioRef.current === audio) currentAudioRef.current = null
        // Fall back to speechSynthesis if audio file missing
        if (fallbackText && window.speechSynthesis) {
          const utterance = new SpeechSynthesisUtterance(fallbackText)
          utterance.rate = 0.9
          utterance.onend = () => onEnd?.()
          utterance.onerror = () => onEnd?.()
          window.speechSynthesis.speak(utterance)
        } else {
          onEnd?.()
        }
      }

      audio.play().catch(() => {
        // Autoplay blocked or file error — call onEnd so chains don't stall
        if (currentAudioRef.current === audio) currentAudioRef.current = null
        onEnd?.()
      })
    }, 350)
  }, [stopCurrentAudio])

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

  return { speak, tick, isMuted, toggleMute }
}
