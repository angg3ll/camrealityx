export function buildGeminiPrompt(categories, answers) {
  const lifestyle = answers.lifestyle || 'no_preference'
  const aesthetic = answers.aesthetic || ''
  const budget = answers.budget
  const fabricPreference = answers.fabric_preference
  const clothingType = answers.clothing_type
  const homeStyle = answers.home_style
  const beautyConcerns = answers.beauty_concerns

  const categoryList = categories.join(', ')

  let specificDetails = ''

  if (categories.includes('clothing')) {
    if (fabricPreference?.length) {
      specificDetails += `Preferred fabrics: ${fabricPreference.join(', ')}. `
    }
    if (clothingType?.length) {
      specificDetails += `Looking for: ${clothingType.join(', ')}. `
    }
  }

  if (categories.includes('home') && homeStyle) {
    specificDetails += `Home decor style: ${homeStyle}. `
  }

  if (categories.includes('beauty') && beautyConcerns?.length) {
    specificDetails += `Beauty priorities: ${beautyConcerns.join(', ')}. `
  }

  const budgetLine = budget
    ? `Maximum price per item: $${budget}.`
    : 'No specific budget limit.'

  return `You are a personal shopping assistant specializing in ethical, sustainable, and handmade goods on Etsy.

A shopper has provided the following preferences:
- Shopping categories: ${categoryList}
- Lifestyle: ${lifestyle}
- Aesthetic: ${aesthetic || 'flexible'}
- ${budgetLine}
${specificDetails ? `- Additional details: ${specificDetails}` : ''}

Generate specific Etsy search queries that will find the most relevant products. Consider that Etsy specializes in handmade, vintage, and unique items.

Return a JSON object with this exact structure:
{
  "searchQueries": ["query1", "query2", "query3", "query4"],
  "productTypes": ["type1", "type2"],
  "tags": ["tag1", "tag2", "tag3"],
  "priceMax": <number or null>
}

Rules:
- searchQueries: 3-5 specific, Etsy-optimized search strings. Include lifestyle keywords (vegan, organic, handmade, sustainable, etc.) where relevant.
- productTypes: 2-4 broad product type labels for display/filtering
- tags: 4-6 short descriptive tags for the results page filter bar
- priceMax: extract from the budget, or null if no limit

Only return valid JSON, no markdown formatting.`
}
