import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Space from './components/Space'
import SoNavbar from './components/SoNavbar'
import SoHero from './components/SoHero'

export default function App() {
  return (
    <Router>
      <header>
        <SignedOut>
          <SoNavbar />
          <SoHero />
        </SignedOut>
        <SignedIn>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
              </>
            } />
            <Route path="/space" element={<Space />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </SignedIn>
      </header>
    </Router>
  )
}