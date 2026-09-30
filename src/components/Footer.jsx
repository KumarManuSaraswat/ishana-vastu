import { Link } from 'react-router-dom'
import Brand from './Brand'
import Icon from './Icon'
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div className="footer-brand"><Link to="/" className="brand brand-full" aria-label="Ishana Vastu home"><Brand full /></Link><p>Harmonizing spaces. Enriching lives.<br />Personal guidance for a more intentional way of living.</p><span className="footer-location"><Icon name="globe" size={16} /> Rooted in Alwar. Connected worldwide.</span></div>
    <div className="footer-links"><h2 className="footer-title">Explore</h2><Link to="/about">Our story</Link><Link to="/services">Our services</Link><Link to="/faq">Common questions</Link><Link to="/contact">Get in touch</Link></div>
    <div className="footer-links"><h2 className="footer-title">Find your balance</h2><Link to="/contact?service=Vastu%20Consultancy">Vastu consultancy</Link><Link to="/contact?service=Pranic%20Healing">Pranic healing</Link><Link to="/contact?service=Tarot%20Guidance">Tarot guidance</Link><Link to="/contact?service=Crystals%20%26%20Bracelets">Crystals & bracelets</Link></div>
    <div className="footer-links"><h2 className="footer-title">Let’s connect</h2><a href="tel:+919413259480">+91 94132 59480</a><a href="https://wa.me/919413259480" target="_blank" rel="noreferrer">Chat on WhatsApp <Icon name="arrow-up" size={14} /></a><p>Alwar, Rajasthan, India</p><a className="footer-booking" href="https://calendar.app.google/AiYDcM6pdePHCUcq6" target="_blank" rel="noreferrer">Book a consultation <Icon name="arrow" size={16} /></a></div>
  </div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Ishana Vastu. All rights reserved.</p><span>With intention. With care.</span></div></footer>
}
