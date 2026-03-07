const STAGES = [
  { label: 'Understanding your preferences…', icon: '🧠' },
  { label: 'Generating smart search queries…', icon: '✨' },
  { label: 'Browsing Etsy for unique finds…', icon: '🛍️' },
  { label: 'Curating your collection…', icon: '💛' },
]

export default function LoadingAnimation({ stage = 0 }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-4">
      {/* Spinning ring */}
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-amber-100" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber-400 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-2xl">
          {STAGES[stage]?.icon || '✨'}
        </div>
      </div>

      <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-3">
        Curating just for you
      </h2>

      <p className="text-stone-500 text-sm mb-10 max-w-xs">
        {STAGES[stage]?.label || 'Almost there…'}
      </p>

      {/* Stage dots */}
      <div className="flex gap-2">
        {STAGES.map((s, i) => (
          <div
            key={i}
            className={`
              transition-all duration-500 rounded-full
              ${i < stage
                ? 'w-2 h-2 bg-amber-400'
                : i === stage
                  ? 'w-6 h-2 bg-amber-400'
                  : 'w-2 h-2 bg-stone-200'
              }
            `}
          />
        ))}
      </div>

      <p className="text-xs text-stone-300 mt-6">This may take 10–20 seconds</p>
    </div>
  )
}
