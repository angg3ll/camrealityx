export default function StepNavigation({ onBack, onNext, onSubmit, isFirst, isLast, canProceed }) {
  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-100">
      <button
        onClick={onBack}
        disabled={isFirst}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all
          ${isFirst
            ? 'text-stone-300 cursor-not-allowed'
            : 'text-stone-500 hover:text-stone-800 hover:bg-stone-100'
          }
        `}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {isLast ? (
        <button
          onClick={onSubmit}
          disabled={!canProceed}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all
            ${canProceed
              ? 'bg-amber-400 text-stone-900 hover:bg-amber-500 shadow-sm hover:shadow-md'
              : 'bg-stone-100 text-stone-300 cursor-not-allowed'
            }
          `}
        >
          Find my products
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
          </svg>
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all
            ${canProceed
              ? 'bg-stone-900 text-white hover:bg-stone-700 shadow-sm hover:shadow-md'
              : 'bg-stone-100 text-stone-300 cursor-not-allowed'
            }
          `}
        >
          Next
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}
