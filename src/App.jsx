import AboutPage from './components/AboutPage'
import ProductPage from './components/ProductPage'
import HighEndProductExperience from './components/HighEndProductExperience'
import ArtistPage from './components/ArtistPage'
import './App.css'

function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  
  // Route handling
  if (path === '/product' || path === '') return <ProductPage />
  if (path === '/luxury') return <HighEndProductExperience />
  if (path === '/artist') return <ArtistPage />
  if (path === '/about') return <AboutPage />
  
  // Default to ProductPage for any other route
  return <ProductPage />
}

export default App
