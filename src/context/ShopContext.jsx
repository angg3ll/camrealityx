import { createContext, useContext, useReducer } from 'react'

const ShopContext = createContext(null)

const initialState = {
  selectedCategories: [],
  answers: {},       // { [questionId]: value }
  products: [],
  filters: {
    category: 'all',
    priceMax: null,
    tag: 'all',
  },
  error: null,
  loading: false,
}

function shopReducer(state, action) {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, selectedCategories: action.payload }
    case 'TOGGLE_CATEGORY': {
      const exists = state.selectedCategories.includes(action.payload)
      return {
        ...state,
        selectedCategories: exists
          ? state.selectedCategories.filter(c => c !== action.payload)
          : [...state.selectedCategories, action.payload],
      }
    }
    case 'SET_ANSWER':
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.value },
      }
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload }
    case 'SET_FILTER':
      return {
        ...state,
        filters: { ...state.filters, [action.key]: action.value },
      }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, initialState)

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  )
}

export function useShop() {
  const ctx = useContext(ShopContext)
  if (!ctx) throw new Error('useShop must be used within ShopProvider')
  return ctx
}
