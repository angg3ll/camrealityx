import { useState } from 'react'
import { getShoppingRecommendations } from '../services/geminiService.js'

export function useGemini() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function getRecommendations(categories, answers) {
    setLoading(true)
    setError(null)
    try {
      const result = await getShoppingRecommendations(categories, answers)
      return result
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { getRecommendations, loading, error }
}
