import { useState } from 'react'
import { openings } from './data/openings'
import { useVoice } from './hooks/useVoice'
import { useOpening } from './hooks/useOpening'
import ChessBoard3D from './components/ChessBoard3D'
import OpeningSelector from './components/OpeningSelector'
import MovePanel from './components/MovePanel'
import VoiceToggle from './components/VoiceToggle'

const STARTING_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

export default function App() {
  const [selectedOpening, setSelectedOpening] = useState(openings[0])
  const { speak, tick, isMuted, toggleMute } = useVoice()

  const {
    stepIndex,
    currentFen,
    currentMove,
    canGoNext,
    canGoBack,
    isPlaying,
    goNext,
    goBack,
    toggleAutoPlay,
  } = useOpening(selectedOpening, speak, tick, isMuted)

  // Track previous FEN for move highlighting
  const prevFen = stepIndex > 0
    ? selectedOpening.moves[stepIndex - 1].fen
    : stepIndex === 0
    ? STARTING_FEN
    : null

  return (
    <div className="h-screen bg-zinc-900 text-white flex flex-col overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-zinc-700 bg-zinc-900/80 backdrop-blur shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-2xl">♟</span>
          <div>
            <h1 className="text-lg font-bold text-amber-400 leading-tight">OpenChess</h1>
            <p className="text-xs text-zinc-500">3D Chess Opening Tutor</p>
          </div>
        </div>
        <VoiceToggle isMuted={isMuted} onToggle={toggleMute} />
      </header>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar — opening selector */}
        <aside className="w-52 shrink-0 bg-zinc-900 border-r border-zinc-700 p-4 overflow-y-auto">
          <OpeningSelector
            selectedId={selectedOpening.id}
            onSelect={setSelectedOpening}
          />
        </aside>

        {/* Center — 3D board */}
        <main className="flex-1 relative bg-zinc-950">
          <ChessBoard3D fen={currentFen} prevFen={prevFen} />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-zinc-600 pointer-events-none">
            Drag to rotate · Scroll to zoom
          </div>
        </main>

        {/* Right sidebar — move panel */}
        <aside className="w-72 shrink-0 bg-zinc-900 border-l border-zinc-700 p-4 overflow-y-auto">
          <MovePanel
            opening={selectedOpening}
            stepIndex={stepIndex}
            currentMove={currentMove}
            canGoNext={canGoNext}
            canGoBack={canGoBack}
            isPlaying={isPlaying}
            onNext={goNext}
            onBack={goBack}
            onTogglePlay={toggleAutoPlay}
          />
        </aside>
      </div>
    </div>
  )
}
