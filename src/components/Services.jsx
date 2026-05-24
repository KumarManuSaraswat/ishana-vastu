import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Vastu Consultancy',
    tag: 'Core Guidance',
    description:
      'Practical vastu consultation for homes, offices, and personal spaces to support harmony, direction, and balanced living.',
  },
  {
    title: 'Pranic Healing',
    tag: 'Healing Support',
    description:
      'A gentle healing approach intended to support energetic balance, emotional ease, and overall well-being through guided healing practices.',
  },
  {
    title: 'Tarot Guidance',
    tag: 'Clarity & Insight',
    description:
      'Reflective tarot guidance for decision-making, self-awareness, and greater clarity around important life situations.',
  },
  {
    title: 'Pendulum Guidance',
    tag: 'Divination',
    description:
      'Supportive pendulum consultation for spiritual insight, energetic questions, and personal guidance.',
  },
  {
    title: 'Aura Reading & Tracing',
    tag: 'Energy Reading',
    description:
      'Aura reading and tracing sessions intended to support awareness of energetic patterns and areas that may need attention.',
  },
  {
    title: 'Crystal Healing & Therapies',
    tag: 'Healing Tools',
    description:
      'Crystal-based support, therapies, and recommendations offered with a thoughtful and inquiry-based approach.',
  },
  {
    title: 'Counselling & Meditation',
    tag: 'Inner Support',
    description:
      'Calm personal guidance through counselling and meditation support for emotional clarity, grounding, and self-reflection.',
  },
  {
    title: 'Kundli Consultation',
    tag: 'Traditional Guidance',
    description:
      'Consultation intended to offer perspective, timing insight, and supportive direction through kundli-based guidance.',
  },
  {
    title: 'Crystals & Bracelets',
    tag: 'Inquiry Based',
    description:
      'A curated showcase of crystals, energized objects, and crystal bracelets offered as supportive spiritual tools through direct inquiry.',
  },
]

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div
          className="section-heading services-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="section-kicker">Services</p>
          <h2>Guidance that supports space, healing, and spiritual clarity</h2>
          <p>
            Ishana Vastu offers vastu consultation, healing support, divination,
            counselling, crystal-based guidance, and spiritual wellness services
            through a calm and personal approach.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className={`service-card ${index === 0 ? 'service-card-featured' : ''}`}
              key={service.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
            >
              <p className="service-tag">{service.tag}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/contact" className="service-link">
                Enquire now
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services