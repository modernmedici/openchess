export default function VoiceToggle({ isMuted, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
        isMuted
          ? 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
          : 'bg-amber-700 text-amber-100 hover:bg-amber-600'
      }`}
      title={isMuted ? 'Enable voice commentary' : 'Mute voice commentary'}
    >
      {isMuted ? (
        <>
          <span>🔇</span>
          <span>Voice Off</span>
        </>
      ) : (
        <>
          <span>🔊</span>
          <span>Voice On</span>
        </>
      )}
    </button>
  )
}
