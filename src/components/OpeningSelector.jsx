import { useState, useMemo } from 'react'
import { openings } from '../data/openings'

const GROUP_ORDER = [
  'Open Games',
  'Semi-Open Games',
  'Closed Games',
  'Indian Defenses',
  'Dutch & Flank d4',
  'Flank & Irregular',
]

export default function OpeningSelector({ selectedId, onSelect }) {
  const [query, setQuery] = useState('')
  const [expandedGroups, setExpandedGroups] = useState(() => {
    const sel = openings.find(o => o.id === selectedId)
    return sel ? new Set([sel.group]) : new Set()
  })

  const filtered = useMemo(() =>
    query ? openings.filter(o => o.name.toLowerCase().includes(query.toLowerCase())) : null,
    [query]
  )

  const grouped = useMemo(() => {
    const map = {}
    for (const o of openings) {
      if (!map[o.group]) map[o.group] = []
      map[o.group].push(o)
    }
    return map
  }, [])

  function handleSelect(op) {
    setExpandedGroups(prev => new Set([...prev, op.group]))
    onSelect(op)
  }

  function toggleGroup(group) {
    setExpandedGroups(prev => {
      const next = new Set(prev)
      next.has(group) ? next.delete(group) : next.add(group)
      return next
    })
  }

  const buttonClass = (id) => `text-left px-3 py-1.5 rounded-lg text-sm transition-all w-full ${
    selectedId === id
      ? 'bg-amber-600 text-white font-semibold shadow-lg'
      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
  }`

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">Select Opening</h2>

      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search openings…"
        className="w-full px-3 py-1.5 rounded-lg bg-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 border border-zinc-700 focus:outline-none focus:border-amber-500"
      />

      {filtered ? (
        filtered.length === 0
          ? <p className="text-xs text-zinc-500 italic px-1">No results</p>
          : filtered.map(op => (
            <button key={op.id} onClick={() => handleSelect(op)} className={buttonClass(op.id)}>
              {op.name}
            </button>
          ))
      ) : (
        GROUP_ORDER.map(group => {
          const items = grouped[group] ?? []
          if (!items.length) return null
          const isOpen = expandedGroups.has(group)
          return (
            <div key={group}>
              <button
                onClick={() => toggleGroup(group)}
                className="w-full flex items-center justify-between px-2 py-1 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-amber-400 transition-colors"
              >
                <span>{group}</span>
                <span className="flex items-center gap-1">
                  <span className="text-zinc-600 font-normal normal-case tracking-normal">{items.length}</span>
                  <span>{isOpen ? '▾' : '▸'}</span>
                </span>
              </button>
              {isOpen && (
                <div className="flex flex-col gap-1 pl-2">
                  {items.map(op => (
                    <button key={op.id} onClick={() => handleSelect(op)} className={buttonClass(op.id)}>
                      {op.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })
      )}
    </div>
  )
}
