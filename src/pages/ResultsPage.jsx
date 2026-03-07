import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import FilterBar from '../components/results/FilterBar'
import ProductGrid from '../components/results/ProductGrid'
import EmptyState from '../components/results/EmptyState'

export default function ResultsPage() {
  const { state } = useShop()
  const navigate = useNavigate()
  const { products, filters } = state

  useEffect(() => {
    if (products.length === 0 && !state.error) {
      navigate('/')
    }
  }, [products, state.error, navigate])

  // Collect tags from Gemini output + product tags
  const geminiTags = filters._geminiTags || []
  const allTags = useMemo(() => {
    const fromProducts = products.flatMap(p => p.tags).filter(Boolean)
    const combined = [...new Set([...geminiTags, ...fromProducts])]
    return combined.slice(0, 8)
  }, [products, geminiTags])

  // Apply filters
  const filtered = useMemo(() => {
    return products.filter(product => {
      if (filters.tag && filters.tag !== 'all') {
        const hasTag =
          product.tags?.some(t => t.toLowerCase().includes(filters.tag.toLowerCase())) ||
          product.title?.toLowerCase().includes(filters.tag.toLowerCase())
        if (!hasTag) return false
      }

      if (filters.priceMax !== null && filters.priceMax !== undefined) {
        if (product.price !== null && product.price > filters.priceMax) return false
      }

      return true
    })
  }, [products, filters])

  if (products.length === 0) return null

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-stone-900">
            Your picks
          </h1>
          <p className="text-stone-400 text-sm mt-1">
            Handpicked from Etsy based on your preferences
          </p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 text-sm font-medium rounded-xl transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          New search
        </button>
      </div>

      <FilterBar tags={allTags} totalCount={filtered.length} />

      {filtered.length === 0 ? (
        <EmptyState message="No products match the current filters. Try removing some." />
      ) : (
        <ProductGrid products={filtered} />
      )}
    </main>
  )
}
