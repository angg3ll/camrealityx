import { useNavigate } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import { CATEGORIES } from '../data/categories'
import HeroSection from '../components/landing/HeroSection'
import CategoryCard from '../components/landing/CategoryCard'

export default function LandingPage() {
  const { state, dispatch } = useShop()
  const navigate = useNavigate()

  function handleToggle(categoryId) {
    dispatch({ type: 'TOGGLE_CATEGORY', payload: categoryId })
  }

  function handleContinue() {
    if (state.selectedCategories.length === 0) return
    navigate('/questionnaire')
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <HeroSection />

      <div className="mb-8">
        <h2 className="font-serif text-xl font-semibold text-stone-700 text-center mb-6">
          What are you shopping for?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CATEGORIES.map(category => (
            <CategoryCard
              key={category.id}
              category={category}
              selected={state.selectedCategories.includes(category.id)}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handleContinue}
          disabled={state.selectedCategories.length === 0}
          className={`
            inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold
            transition-all duration-200
            ${state.selectedCategories.length > 0
              ? 'bg-amber-400 text-stone-900 hover:bg-amber-500 shadow-md hover:shadow-lg hover:-translate-y-0.5'
              : 'bg-stone-100 text-stone-300 cursor-not-allowed'
            }
          `}
        >
          Personalize my experience
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {state.selectedCategories.length > 0 && (
          <p className="text-xs text-stone-400 mt-3">
            {state.selectedCategories.length} categor{state.selectedCategories.length !== 1 ? 'ies' : 'y'} selected
          </p>
        )}
      </div>
    </main>
  )
}
