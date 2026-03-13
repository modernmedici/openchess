import { useState, useRef, useCallback } from 'react'

// Synthesise a short chess-piece-on-board tick using Web Audio API
function playTick() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()

    // Low-frequency thud (body of the piece)
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

    // High-frequency click (wood tap)
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

    // Close context after sounds finish
    setTimeout(() => ctx.close(), 300)
  } catch {
    // silently ignore — Web Audio not available
  }
}

export function useVoice() {
  const [isMuted, setIsMuted] = useState(false)
  const speakTimerRef = useRef(null)

  const speak = useCallback((text, delay = 700) => {
    if (!window.speechSynthesis || isMuted) return
    window.speechSynthesis.cancel()
    clearTimeout(speakTimerRef.current)
    speakTimerRef.current = setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1.0
      utterance.volume = 1.0
      window.speechSynthesis.speak(utterance)
    }, delay)
  }, [isMuted])

  const tick = useCallback(() => {
    playTick()
  }, [])

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      if (!prev) {
        window.speechSynthesis?.cancel()
        clearTimeout(speakTimerRef.current)
      }
      return !prev
    })
  }, [])

  return { speak, tick, isMuted, toggleMute }
}
