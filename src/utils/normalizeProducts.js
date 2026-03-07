/**
 * Normalize a raw Etsy listing + its images array into a clean product object.
 */
export function normalizeProduct(listing, images = []) {
  const price = listing.price
    ? listing.price.amount / listing.price.divisor
    : null

  const primaryImage = images[0]?.url_570xN
    || images[0]?.url_fullxfull
    || images[0]?.url_75x75
    || null

  return {
    id: String(listing.listing_id),
    title: listing.title || 'Untitled',
    price: price ? parseFloat(price.toFixed(2)) : null,
    currency: listing.price?.currency_code || 'USD',
    url: listing.url || `https://www.etsy.com/listing/${listing.listing_id}`,
    image: primaryImage,
    shop: listing.shop_name || null,
    tags: listing.tags || [],
    materials: listing.materials || [],
    category: listing.taxonomy_path?.[0] || null,
    quantity: listing.quantity || 0,
  }
}

/**
 * Deduplicate an array of normalized products by id.
 */
export function deduplicateProducts(products) {
  const seen = new Set()
  return products.filter(p => {
    if (seen.has(p.id)) return false
    seen.add(p.id)
    return true
  })
}
