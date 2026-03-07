import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import { getShoppingRecommendations } from '../services/geminiService'
import { fetchCuratedProducts } from '../services/etsyService'
import LoadingAnimation from '../components/loading/LoadingAnimation'

export default function LoadingPage() {
  const { state, dispatch } = useShop()
  const navigate = useNavigate()
  const [stage, setStage] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const ran = useRef(false)

  useEffect(() => {
    // Redirect guard
    if (state.selectedCategories.length === 0) {
      navigate('/')
      return
    }

    if (ran.current) return
    ran.current = true

    async function run() {
      try {
        setStage(1)
        const geminiOutput = await getShoppingRecommendations(
          state.selectedCategories,
          state.answers
        )
        console.log('[LoadingPage] Gemini output:', geminiOutput)

        setStage(2)
        const products = await fetchCuratedProducts(
          geminiOutput.searchQueries,
          geminiOutput.priceMax,
          24
        )
        console.log('[LoadingPage] Products fetched:', products.length)

        setStage(3)
        dispatch({ type: 'SET_PRODUCTS', payload: products })
        dispatch({ type: 'SET_FILTER', key: '_geminiTags', value: geminiOutput.tags })

        await new Promise(r => setTimeout(r, 800))
        navigate('/results')
      } catch (err) {
        console.error('[LoadingPage] Error:', err)
        setErrorMsg(err.message)
        dispatch({ type: 'SET_ERROR', payload: err.message })
      }
    }

    run()
  }, [])

  if (errorMsg) {
    return (
      <main className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-3">
          Something went wrong
        </h2>
        <p className="text-stone-500 text-sm mb-6 max-w-xs mx-auto bg-stone-100 rounded-xl p-4 font-mono">
          {errorMsg}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate('/questionnaire')}
            className="px-5 py-2.5 bg-stone-100 text-stone-700 text-sm font-semibold rounded-xl hover:bg-stone-200 transition-colors"
          >
            ← Back to questionnaire
          </button>
          <button
            onClick={() => { setErrorMsg(null); ran.current = false; setStage(0) }}
            className="px-5 py-2.5 bg-amber-400 text-stone-900 text-sm font-semibold rounded-xl hover:bg-amber-500 transition-colors"
          >
            Try again
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <LoadingAnimation stage={stage} />
    </main>
  )
}
