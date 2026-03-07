// Each question has a `categories` array: show only if user selected one of those categories.
// Use `categories: ['all']` to always show.

export const QUESTIONS = [
  {
    id: 'lifestyle',
    question: 'Which best describes your lifestyle?',
    categories: ['all'],
    type: 'single',
    options: [
      { value: 'vegan', label: 'Vegan', description: 'No animal products' },
      { value: 'vegetarian', label: 'Vegetarian', description: 'Plant-forward living' },
      { value: 'sustainable', label: 'Sustainable', description: 'Eco-conscious choices' },
      { value: 'minimalist', label: 'Minimalist', description: 'Quality over quantity' },
      { value: 'no_preference', label: 'No preference', description: 'Open to everything' },
    ],
  },
  {
    id: 'aesthetic',
    question: 'What aesthetic speaks to you?',
    categories: ['all'],
    type: 'single',
    options: [
      { value: 'bohemian', label: 'Bohemian', description: 'Free-spirited & earthy' },
      { value: 'modern', label: 'Modern', description: 'Clean lines & contemporary' },
      { value: 'cottagecore', label: 'Cottagecore', description: 'Soft, romantic & nature-inspired' },
      { value: 'classic', label: 'Classic', description: 'Timeless & refined' },
    ],
  },
  {
    id: 'budget',
    question: 'What is your budget per item?',
    categories: ['all'],
    type: 'budget',
    options: [
      { value: 25, label: 'Under $25' },
      { value: 50, label: 'Under $50' },
      { value: 100, label: 'Under $100' },
      { value: 200, label: 'Under $200' },
      { value: null, label: 'No limit' },
    ],
  },
  {
    id: 'fabric_preference',
    question: 'What fabrics do you prefer?',
    categories: ['clothing'],
    type: 'multi',
    options: [
      { value: 'organic_cotton', label: 'Organic Cotton' },
      { value: 'linen', label: 'Linen' },
      { value: 'hemp', label: 'Hemp' },
      { value: 'recycled', label: 'Recycled Materials' },
      { value: 'bamboo', label: 'Bamboo' },
    ],
  },
  {
    id: 'clothing_type',
    question: 'What are you looking for in clothing?',
    categories: ['clothing'],
    type: 'multi',
    options: [
      { value: 'tops', label: 'Tops & Blouses' },
      { value: 'bottoms', label: 'Bottoms' },
      { value: 'dresses', label: 'Dresses & Jumpsuits' },
      { value: 'outerwear', label: 'Outerwear' },
      { value: 'accessories', label: 'Accessories' },
    ],
  },
  {
    id: 'home_style',
    question: 'How would you describe your home style?',
    categories: ['home'],
    type: 'single',
    options: [
      { value: 'scandinavian', label: 'Scandinavian', description: 'Simple & functional' },
      { value: 'boho', label: 'Boho Eclectic', description: 'Layered textures & patterns' },
      { value: 'farmhouse', label: 'Farmhouse', description: 'Rustic & cozy' },
      { value: 'art_deco', label: 'Art Deco', description: 'Bold & glamorous' },
    ],
  },
  {
    id: 'beauty_concerns',
    question: 'What are your beauty priorities?',
    categories: ['beauty'],
    type: 'multi',
    options: [
      { value: 'cruelty_free', label: 'Cruelty-Free' },
      { value: 'natural_ingredients', label: 'Natural Ingredients' },
      { value: 'fragrance_free', label: 'Fragrance-Free' },
      { value: 'zero_waste', label: 'Zero Waste Packaging' },
      { value: 'skincare', label: 'Skincare Focus' },
    ],
  },
]
