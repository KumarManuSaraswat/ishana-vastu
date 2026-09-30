import { Link } from 'react-router-dom'
import Icon from './Icon'
export default function ConsultationCTA() {
  return <section className="consultation-section"><div className="container"><div className="consultation-banner">
    <div className="cta-art" aria-hidden="true"><Icon name="sun" size={140} /></div>
    <div><p className="section-kicker">MAKE SPACE FOR A NEW BEGINNING</p><h2>Your next chapter<br />starts with <em>a conversation.</em></h2><p>Share what’s on your mind. We’ll help you find a place to begin.</p></div>
    <div className="cta-actions"><Link className="primary-btn light-btn" to="/contact">Book a consultation <Icon name="arrow" size={18} /></Link><a className="cta-whatsapp" href="https://wa.me/919413259480" target="_blank" rel="noreferrer"><Icon name="chat" size={18} /> Or say hello on WhatsApp</a></div>
  </div></div></section>
}
