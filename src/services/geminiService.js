import { GoogleGenerativeAI } from '@google/generative-ai'
import { buildGeminiPrompt } from '../data/prompts.js'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY

/**
 * Call Gemini 1.5 Flash with the user's categories + answers.
 * Returns structured JSON: { searchQueries, productTypes, tags, priceMax }
 */
export async function getShoppingRecommendations(categories, answers) {
  if (!apiKey) {
    throw new Error('Missing VITE_GEMINI_API_KEY. Add it to your .env file.')
  }

  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: {
      responseMimeType: 'application/json',
    },
  })

  const prompt = buildGeminiPrompt(categories, answers)

  const result = await model.generateContent(prompt)
  const text = result.response.text()

  let parsed
  try {
    parsed = JSON.parse(text)
  } catch {
    // Strip markdown code fences if present
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
    parsed = JSON.parse(cleaned)
  }

  console.log('[Gemini] Parsed output:', parsed)

  // Validate expected shape
  if (!Array.isArray(parsed.searchQueries)) {
    throw new Error('Gemini response missing searchQueries array')
  }

  return {
    searchQueries: parsed.searchQueries || [],
    productTypes: parsed.productTypes || [],
    tags: parsed.tags || [],
    priceMax: parsed.priceMax ?? null,
  }
}
