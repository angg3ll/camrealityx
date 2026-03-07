import { normalizeProduct, deduplicateProducts } from '../utils/normalizeProducts.js'

const ETSY_API_KEY = import.meta.env.VITE_ETSY_API_KEY
const BASE_URL = 'https://openapi.etsy.com/v3/application'

/**
 * Search Etsy listings for a single query string.
 */
async function searchListings(keyword, priceMax = null, limit = 12) {
  if (!ETSY_API_KEY) {
    throw new Error('Missing VITE_ETSY_API_KEY. Add it to your .env file.')
  }

  const params = new URLSearchParams({
    keywords: keyword,
    limit: String(limit),
    sort_on: 'score',
  })

  if (priceMax) {
    params.set('max_price', String(priceMax))
  }

  const url = `${BASE_URL}/listings/active?${params.toString()}`

  const response = await fetch(url, {
    headers: {
      'x-api-key': ETSY_API_KEY,
    },
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Etsy API error ${response.status}: ${text}`)
  }

  const data = await response.json()
  return data.results || []
}

/**
 * Fetch images for a single listing.
 */
async function fetchListingImages(listingId) {
  const url = `${BASE_URL}/listings/${listingId}/images`

  const response = await fetch(url, {
    headers: {
      'x-api-key': ETSY_API_KEY,
    },
  })

  if (!response.ok) return []

  const data = await response.json()
  return data.results || []
}

/**
 * Fan out across all search queries, deduplicate, fetch images, and normalize.
 * Returns up to `maxResults` normalized products.
 */
export async function fetchCuratedProducts(searchQueries, priceMax = null, maxResults = 24) {
  // Fan out across queries in parallel
  const rawListingArrays = await Promise.all(
    searchQueries.map(q => searchListings(q, priceMax, 8).catch(() => []))
  )

  // Flatten and deduplicate by listing_id
  const allRaw = rawListingArrays.flat()
  const unique = deduplicateByField(allRaw, 'listing_id').slice(0, maxResults)

  // Fetch images in parallel
  const withImages = await Promise.all(
    unique.map(async listing => {
      const images = await fetchListingImages(listing.listing_id).catch(() => [])
      return normalizeProduct(listing, images)
    })
  )

  return withImages.filter(p => p.image !== null)
}

function deduplicateByField(arr, field) {
  const seen = new Set()
  return arr.filter(item => {
    if (seen.has(item[field])) return false
    seen.add(item[field])
    return true
  })
}
