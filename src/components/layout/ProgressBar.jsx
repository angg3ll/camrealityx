export default function ProgressBar({ current, total }) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-stone-400 mb-1">
        <span>Step {current} of {total}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
