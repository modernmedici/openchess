import { openings } from '../data/openings'

export default function OpeningSelector({ selectedId, onSelect }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">Select Opening</h2>
      {openings.map(op => (
        <button
          key={op.id}
          onClick={() => onSelect(op)}
          className={`text-left px-3 py-2 rounded-lg text-sm transition-all ${
            selectedId === op.id
              ? 'bg-amber-600 text-white font-semibold shadow-lg'
              : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
          }`}
        >
          {op.name}
        </button>
      ))}
    </div>
  )
}
