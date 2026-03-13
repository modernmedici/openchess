import { useState, useEffect, useRef, useCallback } from 'react'

const STARTING_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

export function useOpening(opening, speak, tick, isMuted) {
  const [stepIndex, setStepIndex] = useState(-1)
  const [isPlaying, setIsPlaying] = useState(false)

  // Refs so the auto-play chain closure always sees current values
  const isPlayingRef = useRef(false)
  const openingRef = useRef(opening)
  const stepRef = useRef(-1)

  useEffect(() => { openingRef.current = opening }, [opening])

  // Reset when opening changes
  useEffect(() => {
    isPlayingRef.current = false
    setIsPlaying(false)
    setStepIndex(-1)
    stepRef.current = -1
  }, [opening?.id])

  const currentFen = stepIndex === -1
    ? STARTING_FEN
    : opening.moves[stepIndex].fen

  const currentMove = stepIndex >= 0 ? opening.moves[stepIndex] : null
  const canGoNext = stepIndex < opening.moves.length - 1
  const canGoBack = stepIndex >= 0

  // Chain: play tick + commentary for moveIndex, then if auto-playing advance
  const playMove = useCallback((moveIndex, chain = false) => {
    tick()
    speak(opening.moves[moveIndex].commentary, {
      onEnd: () => {
        if (!chain || !isPlayingRef.current) return
        const next = moveIndex + 1
        if (next >= openingRef.current.moves.length) {
          isPlayingRef.current = false
          setIsPlaying(false)
          return
        }
        // 600ms breath between moves during auto-play
        setTimeout(() => {
          if (!isPlayingRef.current) return
          stepRef.current = next
          setStepIndex(next)
          playMove(next, true)
        }, 600)
      }
    })
  }, [opening, speak, tick])

  function goNext() {
    if (!canGoNext) return
    const next = stepIndex + 1
    stepRef.current = next
    setStepIndex(next)
    playMove(next, false)
  }

  function goBack() {
    if (!canGoBack) return
    const prev = stepIndex - 1
    stepRef.current = prev
    setStepIndex(prev)
    tick()
  }

  function toggleAutoPlay() {
    if (isPlaying) {
      isPlayingRef.current = false
      setIsPlaying(false)
      window.speechSynthesis?.cancel()
    } else {
      if (!canGoNext) return
      isPlayingRef.current = true
      setIsPlaying(true)
      const next = stepIndex + 1
      stepRef.current = next
      setStepIndex(next)
      playMove(next, true)
    }
  }

  return {
    stepIndex,
    currentFen,
    currentMove,
    canGoNext,
    canGoBack,
    isPlaying,
    goNext,
    goBack,
    toggleAutoPlay,
  }
}
