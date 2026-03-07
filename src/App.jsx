import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ShopProvider } from './context/ShopContext'
import LandingPage from './pages/LandingPage'
import QuestionnairePage from './pages/QuestionnairePage'
import LoadingPage from './pages/LoadingPage'
import ResultsPage from './pages/ResultsPage'
import Header from './components/layout/Header'

function App() {
  return (
    <ShopProvider>
      <HashRouter>
        <div className="min-h-screen bg-stone-50">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/questionnaire" element={<QuestionnairePage />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </HashRouter>
    </ShopProvider>
  )
}

export default App
