import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-kicker">Ishana Vastu</p>
          <h3>Grounded spiritual guidance with care, clarity, and trust.</h3>
          <p>
            Vastu consultation, pranic healing, tarot guidance, counselling,
            aura work, crystal support, and spiritual wellness services through
            a calm and personal approach.
          </p>
        </div>

        <div className="footer-links">
          <p className="footer-title">Navigate</p>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <p className="footer-title">Contact</p>
          <a href="https://wa.me/919413259480" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="tel:+919784102251">+91 9413259480</a>
          <p>Online worldwide</p>
          <p>Offline in Alwar, Rajasthan</p>
        </div>

        <div className="footer-links">
          <p className="footer-title">Book</p>
          <a
            href="https://calendar.app.google/AiYDcM6pdePHCUcq6"
            target="_blank"
            rel="noreferrer"
          >
            Book consultation
          </a>
          <p>Tarot guidance available</p>
          <p>Crystal purchases via inquiry</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Ishana Vastu. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer