import { useNavigate } from 'react-router-dom'

export default function EmptyState({ message }) {
  const navigate = useNavigate()

  return (
    <div className="text-center py-20 px-4">
      <div className="text-5xl mb-4">🔍</div>
      <h3 className="font-serif text-xl font-semibold text-stone-700 mb-2">
        No products found
      </h3>
      <p className="text-stone-400 text-sm mb-6 max-w-xs mx-auto">
        {message || 'We couldn\'t find items matching your filters. Try adjusting them.'}
      </p>
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 text-stone-900 text-sm font-semibold rounded-xl hover:bg-amber-500 transition-colors"
      >
        Start a new search
      </button>
    </div>
  )
}
