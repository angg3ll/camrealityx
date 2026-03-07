import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import { QUESTIONS } from '../data/questions'
import QuestionStep from '../components/questionnaire/QuestionStep'
import StepNavigation from '../components/questionnaire/StepNavigation'
import ProgressBar from '../components/layout/ProgressBar'

export default function QuestionnairePage() {
  const { state, dispatch } = useShop()
  const navigate = useNavigate()
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    if (state.selectedCategories.length === 0) {
      navigate('/')
    }
  }, [state.selectedCategories, navigate])

  // Filter questions to those relevant to selected categories
  const filteredQuestions = QUESTIONS.filter(q =>
    q.categories.includes('all') ||
    q.categories.some(c => state.selectedCategories.includes(c))
  )

  const currentQuestion = filteredQuestions[stepIndex]
  const currentAnswer = state.answers[currentQuestion?.id]

  const canProceed = (() => {
    if (!currentQuestion) return false
    if (currentQuestion.type === 'multi') return true
    return currentAnswer !== undefined && currentAnswer !== null && currentAnswer !== ''
  })()

  function handleChange(questionId, value) {
    dispatch({ type: 'SET_ANSWER', questionId, value })
  }

  function handleNext() {
    if (stepIndex < filteredQuestions.length - 1) {
      setStepIndex(i => i + 1)
    }
  }

  function handleBack() {
    if (stepIndex > 0) {
      setStepIndex(i => i - 1)
    }
  }

  function handleSubmit() {
    navigate('/loading')
  }

  if (!currentQuestion) return null

  return (
    <main className="max-w-xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <ProgressBar current={stepIndex + 1} total={filteredQuestions.length} />
      </div>

      <QuestionStep
        question={currentQuestion}
        value={currentAnswer}
        onChange={handleChange}
      />

      <StepNavigation
        onBack={handleBack}
        onNext={handleNext}
        onSubmit={handleSubmit}
        isFirst={stepIndex === 0}
        isLast={stepIndex === filteredQuestions.length - 1}
        canProceed={canProceed}
      />
    </main>
  )
}
