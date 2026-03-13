import { useState, useEffect, useRef } from 'react'

const STARTING_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

export function useOpening(opening, speak, tick, isMuted) {
  const [stepIndex, setStepIndex] = useState(-1) // -1 = starting position
  const [isPlaying, setIsPlaying] = useState(false)
  const timerRef = useRef(null)

  // Reset when opening changes
  useEffect(() => {
    setStepIndex(-1)
    setIsPlaying(false)
    clearTimer()
  }, [opening?.id])

  function clearTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  function playMove(moveIndex) {
    tick()
    if (!isMuted) speak(opening.moves[moveIndex].commentary)
  }

  const currentFen = stepIndex === -1
    ? STARTING_FEN
    : opening.moves[stepIndex].fen

  const currentMove = stepIndex >= 0 ? opening.moves[stepIndex] : null
  const canGoNext = stepIndex < opening.moves.length - 1
  const canGoBack = stepIndex >= 0

  function goNext() {
    if (!canGoNext) return
    const next = stepIndex + 1
    setStepIndex(next)
    playMove(next)
  }

  function goBack() {
    if (!canGoBack) return
    setStepIndex(prev => prev - 1)
    tick()
  }

  function toggleAutoPlay() {
    if (isPlaying) {
      setIsPlaying(false)
      clearTimer()
    } else {
      setIsPlaying(true)
      if (canGoNext) {
        const next = stepIndex + 1
        setStepIndex(next)
        playMove(next)
      }
      timerRef.current = setInterval(() => {
        setStepIndex(prev => {
          const next = prev + 1
          if (next >= opening.moves.length) {
            setIsPlaying(false)
            clearTimer()
            return prev
          }
          playMove(next)
          return next
        })
      }, 4000)
    }
  }

  // Cleanup on unmount
  useEffect(() => () => clearTimer(), [])

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
