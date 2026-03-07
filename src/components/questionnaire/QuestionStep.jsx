import OptionButton from './OptionButton'
import BudgetSlider from './BudgetSlider'

export default function QuestionStep({ question, value, onChange }) {
  function handleSingleSelect(optionValue) {
    onChange(question.id, optionValue)
  }

  function handleMultiSelect(optionValue) {
    const current = Array.isArray(value) ? value : []
    const next = current.includes(optionValue)
      ? current.filter(v => v !== optionValue)
      : [...current, optionValue]
    onChange(question.id, next)
  }

  function handleBudget(optionValue) {
    onChange(question.id, optionValue)
  }

  return (
    <div className="animate-fade-in">
      <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-6">
        {question.question}
      </h2>

      {question.type === 'budget' ? (
        <BudgetSlider question={question} value={value} onChange={handleBudget} />
      ) : (
        <div className="space-y-2">
          {question.options.map(opt => (
            <OptionButton
              key={opt.value}
              option={opt}
              selected={
                question.type === 'multi'
                  ? Array.isArray(value) && value.includes(opt.value)
                  : value === opt.value
              }
              onClick={question.type === 'multi' ? handleMultiSelect : handleSingleSelect}
              multiSelect={question.type === 'multi'}
            />
          ))}
        </div>
      )}

      {question.type === 'multi' && (
        <p className="text-xs text-stone-400 mt-3">Select all that apply</p>
      )}
    </div>
  )
}
