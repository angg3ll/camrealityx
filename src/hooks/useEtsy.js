import { useState } from 'react'
import { fetchCuratedProducts } from '../services/etsyService.js'

export function useEtsy() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchProducts(searchQueries, priceMax) {
    setLoading(true)
    setError(null)
    try {
      const products = await fetchCuratedProducts(searchQueries, priceMax)
      return products
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { fetchProducts, loading, error }
}
