import { useState, useRef, useCallback } from 'react'

export function useVoice() {
  const [isMuted, setIsMuted] = useState(false)
  const utteranceRef = useRef(null)

  const speak = useCallback((text) => {
    if (!window.speechSynthesis || isMuted) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.9
    utterance.pitch = 1.0
    utterance.volume = 1.0
    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [isMuted])

  const cancel = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel()
    }
  }, [])

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      if (!prev) {
        // muting — cancel current speech
        if (window.speechSynthesis) window.speechSynthesis.cancel()
      }
      return !prev
    })
  }, [])

  return { speak, cancel, isMuted, toggleMute }
}
