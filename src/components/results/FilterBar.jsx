import { useShop } from '../../context/ShopContext'

export default function FilterBar({ tags, totalCount }) {
  const { state, dispatch } = useShop()
  const { filters } = state

  const priceOptions = [
    { label: 'Any price', value: null },
    { label: 'Under $25', value: 25 },
    { label: 'Under $50', value: 50 },
    { label: 'Under $100', value: 100 },
  ]

  function setTag(tag) {
    dispatch({ type: 'SET_FILTER', key: 'tag', value: tag })
  }

  function setPrice(value) {
    dispatch({ type: 'SET_FILTER', key: 'priceMax', value })
  }

  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <span className="text-sm text-stone-400 font-medium shrink-0">
        {totalCount} item{totalCount !== 1 ? 's' : ''}
      </span>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setTag('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            filters.tag === 'all'
              ? 'bg-stone-900 text-white'
              : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
          }`}
        >
          All
        </button>
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setTag(tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all capitalize ${
              filters.tag === tag
                ? 'bg-amber-400 text-stone-900'
                : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Price filter */}
      <div className="ml-auto shrink-0">
        <select
          value={filters.priceMax ?? ''}
          onChange={e => setPrice(e.target.value ? Number(e.target.value) : null)}
          className="text-xs bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          {priceOptions.map(opt => (
            <option key={opt.label} value={opt.value ?? ''}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
