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

  // Keep ref in sync so callbacks always see current mute state
  const setMuted = (val) => {
    isMutedRef.current = val
    setIsMuted(val)
  }

  // speak(text, { onEnd }) — waits 350ms after tick then speaks full text.
  // onEnd fires when the utterance finishes naturally.
  const speak = useCallback((text, { onEnd } = {}) => {
    window.speechSynthesis?.cancel()
    clearTimeout(pendingRef.current)

    if (isMutedRef.current) {
      onEnd?.()
      return
    }

    pendingRef.current = setTimeout(() => {
      if (isMutedRef.current) { onEnd?.(); return }
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1.0
      utterance.volume = 1.0
      utterance.onend = () => onEnd?.()
      utterance.onerror = () => onEnd?.()
      window.speechSynthesis.speak(utterance)
    }, 350)
  }, [])

  const tick = useCallback(() => playTick(), [])

  const toggleMute = useCallback(() => {
    const next = !isMutedRef.current
    if (next) {
      window.speechSynthesis?.cancel()
      clearTimeout(pendingRef.current)
    }
    setMuted(next)
  }, [])

  return { speak, tick, isMuted, toggleMute }
}
