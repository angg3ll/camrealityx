export default function OptionButton({ option, selected, onClick, multiSelect }) {
  return (
    <button
      onClick={() => onClick(option.value)}
      className={`
        w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-150
        flex items-center justify-between gap-3 group
        ${selected
          ? 'border-amber-400 bg-amber-50 text-stone-900'
          : 'border-stone-200 bg-white text-stone-600 hover:border-stone-300 hover:text-stone-800'
        }
      `}
    >
      <div>
        <span className="font-medium text-sm">{option.label}</span>
        {option.description && (
          <p className="text-xs text-stone-400 mt-0.5">{option.description}</p>
        )}
      </div>

      <div className={`
        w-5 h-5 flex-shrink-0 rounded-${multiSelect ? 'md' : 'full'} border-2 transition-all
        flex items-center justify-center
        ${selected
          ? 'bg-amber-400 border-amber-400'
          : 'border-stone-300 group-hover:border-stone-400'
        }
      `}>
        {selected && (
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </button>
  )
}
