export default function HeroSection() {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full mb-6 tracking-wide uppercase">
        AI-Powered Shopping
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-stone-900 leading-tight mb-4">
        Find what truly{' '}
        <span className="text-amber-500 italic">fits</span>{' '}
        your life.
      </h1>
      <p className="text-stone-500 text-lg leading-relaxed">
        Tell us about your lifestyle and values. Our AI will curate handpicked
        Etsy finds tailored just for you.
      </p>
    </div>
  )
}
