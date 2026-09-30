import { Link } from 'react-router-dom'
import Icon from './Icon'
export default function Hero() {
  return <>
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow"><span /> ROOTED IN TRADITION. CENTERED ON YOU.</p>
          <h1 id="hero-title">A harmonious space.<br />A more <em>balanced you.</em></h1>
          <p className="hero-text">Bring intention to your space and clarity to your life. Personal Vastu, healing, and spiritual guidance, thoughtfully shaped around you.</p>
          <div className="hero-actions">
            <Link className="primary-btn" to="/contact">Begin your journey <Icon name="arrow" size={18} /></Link>
            <a className="hero-explore" href="#services">Explore our services <span><Icon name="arrow" size={17} /></span></a>
          </div>
          <div className="hero-trust">
            <div className="avatar-stack" aria-hidden="true"><img src="/mata%20shree.jpeg" alt="" /><img src="/naman%20bhaiya%20%20PM.jpeg" alt="" /><img src="/chandarshekhar%20dada.jpeg" alt="" /></div>
            <p><strong>Professional guidance. A personal approach.</strong><span>Guided by experience. Grounded in care.</span></p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame"><img src="/images/harmonious-space.webp" width="1122" height="1402" alt="A sunlit home with a graceful arch opening onto a green courtyard" fetchPriority="high" /></div>
          <div className="orbit-label"><Icon name="sun" size={22} /><span>SPACE · ENERGY · YOU</span></div>
          <div className="hero-image-note"><span className="note-icon"><Icon name="leaf" size={25} /></span><div><strong>Harmony starts at home.</strong><span>Make room for what matters.</span></div></div>
          <p className="image-caption">A little intention. A beautiful shift.</p>
        </div>
      </div>
    </section>
    <div className="values-strip"><div className="container values-strip-inner">
      <span><Icon name="compass" size={20} /> Ancient wisdom, thoughtful guidance</span>
      <span><Icon name="heart" size={20} /> A personal, caring approach</span>
      <span><Icon name="globe" size={20} /> Online worldwide · In person in Alwar</span>
    </div></div>
  </>
}
