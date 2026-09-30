import ServicesSection from '../components/Services'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
      <section className="page-heading">
        <div className="container">
          <p className="section-kicker">Guidance, with you at the centre</p>
          <h1>More harmony.<br />More <em>possibility.</em></h1>
          <p>
            Every person, space, and season of life is different. Explore our
            offerings and begin with what feels relevant to you.
          </p>
        </div>
      </section>

      <ServicesSection />

      <section className="preparation-section" aria-labelledby="preparation-heading">
        <div className="container">
          <div className="preparation-panel">
            <div>
              <p className="section-kicker">Before we connect</p>
              <h2 id="preparation-heading">A little preparation.<br />A more <em>personal conversation.</em></h2>
              <p>
                You do not need to have everything figured out. A few details
                help us understand your intentions and suggest a starting point.
              </p>
              <Link to="/contact" className="text-link">
                Start a conversation <Icon name="arrow" />
              </Link>
            </div>
            <ul className="preparation-list">
              <li><Icon name="check" /><span>Share what brings you here and the questions you would like to explore.</span></li>
              <li><Icon name="check" /><span>For a Vastu enquiry, have a floor plan or a few photographs of your space ready if available.</span></li>
              <li><Icon name="check" /><span>For Kundli guidance, share your birth date, time, and place during your enquiry.</span></li>
              <li><Icon name="check" /><span>If you are unsure which service fits, tell us a little about your intention. We can help you choose.</span></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
