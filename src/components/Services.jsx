import { Link } from 'react-router-dom'
import Icon from './Icon'

const services = [
  {
    title: 'Vastu Consultancy',
    tag: 'Spaces with intention',
    icon: 'home',
    description:
      'Thoughtful guidance for your home, workplace, or a new beginning. Explore how the arrangement of your space can better reflect the way you want to live.',
    fit: 'Creating a more considered home or workspace.',
  },
  {
    title: 'Pranic Healing',
    tag: 'Energy & well-being',
    icon: 'leaf',
    description:
      'A gentle, energy-focused practice that offers space to pause, reconnect, and explore your sense of balance through guided sessions.',
    fit: 'Making time for rest and personal well-being.',
  },
  {
    title: 'Tarot Guidance',
    tag: 'Reflection & perspective',
    icon: 'sparkles',
    description:
      'Use the symbolism of tarot to explore a question, notice different perspectives, and approach your next step with greater self-awareness.',
    fit: 'Reflecting on a transition or an important choice.',
  },
  {
    title: 'Pendulum Guidance',
    tag: 'Intuitive exploration',
    icon: 'compass',
    description:
      'A personal session for exploring spiritual questions through pendulum work, with room for curiosity, discussion, and your own interpretation.',
    fit: 'Exploring a focused spiritual or energetic question.',
  },
  {
    title: 'Aura Reading & Tracing',
    tag: 'Personal awareness',
    icon: 'sun',
    description:
      'Explore energetic patterns through an aura reading and tracing session, using the experience as a starting point for personal reflection.',
    fit: 'Learning more about your spiritual practice.',
  },
  {
    title: 'Crystal Healing & Therapies',
    tag: 'Mindful rituals',
    icon: 'crystal',
    description:
      'Discover crystal-focused practices and thoughtful recommendations, shaped around your interests and the intentions you bring to a session.',
    fit: 'Bringing intention to a personal wellness ritual.',
  },
  {
    title: 'Counselling & Meditation',
    tag: 'A moment to reconnect',
    icon: 'heart',
    description:
      'A calm setting for conversation, guided meditation, and self-reflection. Take a little time to listen to yourself and reconnect with what matters.',
    fit: 'Finding space for reflection and grounding.',
  },
  {
    title: 'Kundli Consultation',
    tag: 'Traditional perspective',
    icon: 'globe',
    description:
      'Explore your birth chart through the lens of traditional kundli guidance, with a personal conversation about the questions on your mind.',
    fit: 'Seeking a traditional perspective on life transitions.',
  },
  {
    title: 'Crystals & Bracelets',
    tag: 'Everyday intention',
    icon: 'crystal',
    description:
      'Explore crystals and crystal bracelets selected with care. Ask about available pieces and find something that feels meaningful to you.',
    fit: 'Choosing a personal piece or a thoughtful gift.',
  },
]

const coreServiceTitles = [
  'Vastu Consultancy',
  'Pranic Healing',
  'Tarot Guidance',
  'Crystals & Bracelets',
]

function Services({ compact = false }) {
  const visibleServices = compact
    ? services.filter((service) => coreServiceTitles.includes(service.title))
    : services

  return (
    <section id="services" className="services-section" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-heading services-heading">
          <p className="section-kicker">Our offerings</p>
          <div className="heading-row">
            <h2 id="services-heading">Find your path to <em>balance.</em></h2>
            {compact && (
              <Link to="/services" className="text-link">
                Explore all services <Icon name="arrow" />
              </Link>
            )}
          </div>
          <p>
            From the spaces you inhabit to the questions you carry, discover
            personal guidance that meets you where you are.
          </p>
        </div>

        <div className={`services-grid ${compact ? 'services-grid-compact' : ''}`}>
          {visibleServices.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon" aria-hidden="true">
                <Icon name={service.icon} />
              </div>
              <p className="service-tag">{service.tag}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {!compact && (
                <p className="service-fit">
                  <span>Best for</span> {service.fit}
                </p>
              )}
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="service-link"
                aria-label={`Enquire about ${service.title}`}
              >
                Let’s explore <Icon name="arrow" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
