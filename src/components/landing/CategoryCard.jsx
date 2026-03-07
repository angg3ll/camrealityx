export default function CategoryCard({ category, selected, onToggle }) {
  return (
    <button
      onClick={() => onToggle(category.id)}
      className={`
        relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2
        transition-all duration-200 cursor-pointer text-center
        ${selected
          ? 'border-amber-400 bg-amber-50 shadow-md shadow-amber-100'
          : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm'
        }
      `}
    >
      {selected && (
        <div className="absolute top-3 right-3 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}

      <span className="text-4xl">{category.emoji}</span>

      <div>
        <h3 className={`font-serif font-semibold text-lg mb-1 ${selected ? 'text-stone-900' : 'text-stone-700'}`}>
          {category.label}
        </h3>
        <p className="text-xs text-stone-400 leading-snug">
          {category.description}
        </p>
      </div>
    </button>
  )
}
