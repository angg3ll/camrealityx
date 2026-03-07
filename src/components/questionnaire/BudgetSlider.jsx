import OptionButton from './OptionButton'

// Budget is a preset-picker (not a slider), using the question options
export default function BudgetSlider({ question, value, onChange }) {
  return (
    <div className="space-y-2">
      {question.options.map(opt => (
        <OptionButton
          key={opt.value ?? 'unlimited'}
          option={opt}
          selected={value === opt.value}
          onClick={() => onChange(opt.value)}
          multiSelect={false}
        />
      ))}
    </div>
  )
}
