import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import PromoSection from './components/PromoSection'
import Team from './components/Team'
import Footer from './components/Footer'
import InfoSection from './components/Info'
import Rules from './components/Rules'
import Register from './components/Register'

export default function App() {
  return (
    <Router>
      <main className="min-h-screen text-black font-sans">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <InfoSection />
                <PromoSection />
                <Team />
                <Footer />
              </>
            }
          />
          <Route
            path="/sesion-gratis"
            element={
              <>
                <Rules />
                <Register />
              </>
            }
          />
        </Routes>
      </main>
    </Router>
  )
}
