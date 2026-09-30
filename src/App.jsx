import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { MotionConfig } from 'motion/react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollToTop />
      <Navbar />

      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<section className="page-heading"><div className="container"><p className="section-kicker">A LITTLE DETOUR</p><h1>Let’s find your way <em>back.</em></h1><p>This page couldn’t be found. There’s plenty to explore from home.</p><Link className="primary-btn" to="/">Return home</Link></div></section>} />
        </Routes>
      </main>

      <Footer />
    </MotionConfig>
  )
}

export default App
