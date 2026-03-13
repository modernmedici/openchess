export default function MovePanel({
  opening,
  stepIndex,
  currentMove,
  canGoNext,
  canGoBack,
  isPlaying,
  onNext,
  onBack,
  onTogglePlay,
}) {
  const totalMoves = opening?.moves?.length ?? 0
  const progress = stepIndex + 1 // 0 = start, n = on step n

  return (
    <div className="flex flex-col gap-4">
      {/* Opening info */}
      <div>
        <h1 className="text-lg font-bold text-amber-400">{opening?.name}</h1>
        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{opening?.description}</p>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs text-zinc-500 mb-1">
          <span>Move {progress} of {totalMoves}</span>
          {stepIndex === -1 && <span className="text-zinc-500 italic">Starting position</span>}
        </div>
        <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500 rounded-full transition-all duration-300"
            style={{ width: `${totalMoves > 0 ? (progress / totalMoves) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Current move */}
      <div className="bg-zinc-800 rounded-xl p-4 min-h-[120px]">
        {currentMove ? (
          <>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-bold text-white font-mono">{currentMove.san}</span>
              <span className="text-xs text-zinc-500">
                {stepIndex % 2 === 0 ? 'White' : 'Black'} — Move {Math.ceil((stepIndex + 1) / 2)}
              </span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{currentMove.commentary}</p>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-zinc-500 text-sm italic">
            Press Next to begin the opening
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={onBack}
          disabled={!canGoBack}
          className="flex-1 py-2 rounded-lg bg-zinc-700 text-white text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-600 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onTogglePlay}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
            isPlaying
              ? 'bg-red-700 hover:bg-red-600 text-white'
              : 'bg-amber-600 hover:bg-amber-500 text-white'
          }`}
        >
          {isPlaying ? '⏸ Pause' : '▶ Auto'}
        </button>
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className="flex-1 py-2 rounded-lg bg-zinc-700 text-white text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-600 transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Move list */}
      {opening?.moves && opening.moves.length > 0 && (
        <div className="bg-zinc-800 rounded-xl p-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Move List</h3>
          <div className="flex flex-wrap gap-1">
            {opening.moves.map((move, i) => (
              <span
                key={i}
                className={`text-xs px-1.5 py-0.5 rounded font-mono ${
                  i === stepIndex
                    ? 'bg-amber-600 text-white'
                    : i < stepIndex
                    ? 'text-zinc-400'
                    : 'text-zinc-600'
                }`}
              >
                {i % 2 === 0 ? `${Math.ceil((i + 1) / 2)}.` : ''}{move.san}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
