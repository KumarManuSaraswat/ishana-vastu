import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="eyebrow">Online worldwide • Offline in Alwar</p>

          <h1>
            Harmonious spaces, healing support, and spiritual guidance.
          </h1>

          <p className="hero-text">
            Ishana Vastu is a family-led practice offering vastu consultation,
            pranic healing, tarot guidance, counselling, aura work, crystal
            support, and spiritual wellness services through a calm, personal,
            and professional approach.
          </p>

          <div className="hero-actions">
            <Link className="primary-btn" to="/contact">
              Book a consultation
            </Link>

            <a
              className="secondary-btn"
              href="https://wa.me/919784102251"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="hero-points">
            <span>Monica Saraswat</span>
            <span>Naman Saraswat</span>
            <span>Chandar S Gupta</span>
            <span>Contact for pricing</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="card-glow" />
          <div className="consult-card">
            <p className="card-label">Consultation focus</p>
            <h3>Vastu • Healing • Tarot • Aura Work</h3>
            <p>
              A grounded consultation practice for spatial harmony, emotional
              clarity, energetic support, and spiritual guidance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero