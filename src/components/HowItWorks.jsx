import { Link } from 'react-router-dom'
import Icon from './Icon'
const steps = [
  { title: 'Start with a conversation', description: 'Tell us about your space, your questions, or what you’re looking for. We’ll help you choose a suitable consultation.' },
  { title: 'Explore, together', description: 'Meet your practitioner online or in Alwar for a personal session. Your context, comfort, and questions lead the way.' },
  { title: 'Move forward with intention', description: 'Leave with guidance to reflect on and practical next steps to explore at your own pace.' },
]
export default function HowItWorks() {
  return <section className="journey-section" aria-labelledby="journey-title"><div className="container">
    <div className="section-heading journey-heading"><p className="section-kicker">YOUR JOURNEY, SIMPLIFIED</p><h2 id="journey-title">A small first step.<br /><em>A thoughtful way forward.</em></h2><p>You don’t need to have all the answers before you begin.</p></div>
    <div className="journey-grid">{steps.map((step,index) => <article className="journey-step" key={step.title}><div className="step-top"><span className="step-number">0{index+1}</span><span className="step-line" /></div><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
    <Link to="/contact" className="text-link journey-link">Let’s take the first step <Icon name="arrow" size={18} /></Link>
  </div></section>
}
