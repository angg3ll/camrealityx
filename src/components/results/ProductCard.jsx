export default function ProductCard({ product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-stone-300">
            🛍️
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-stone-800 line-clamp-2 leading-snug mb-2 group-hover:text-amber-700 transition-colors">
          {product.title}
        </h3>

        <div className="flex items-center justify-between">
          {product.price !== null ? (
            <span className="text-base font-semibold text-stone-900">
              {product.currency === 'USD' ? '$' : product.currency}{product.price.toFixed(2)}
            </span>
          ) : (
            <span className="text-sm text-stone-400">Price unavailable</span>
          )}

          {product.shop && (
            <span className="text-xs text-stone-400 truncate max-w-[100px]">{product.shop}</span>
          )}
        </div>

        {product.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {product.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-stone-100 text-stone-500 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  )
}
