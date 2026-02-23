import AboutPage from './components/AboutPage'
import ProductPage from './components/ProductPage'
import HighEndProductExperience from './components/HighEndProductExperience'
import './App.css'

function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  if (path === '/product') return <ProductPage />
  if (path === '/luxury') return <HighEndProductExperience />
  return <AboutPage />
}

export default App
