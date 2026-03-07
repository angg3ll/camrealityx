import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-serif font-semibold text-stone-900 tracking-tight">
            MaterialMatters<span className="text-amber-500">.</span>
          </span>
        </Link>

        {!isLanding && (
          <Link
            to="/"
            className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
          >
            ← Start over
          </Link>
        )}
      </div>
    </header>
  )
}
