import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const values = [
  {
    icon: 'home',
    title: 'Care for your space',
    description: 'Thoughtful guidance for the places where your life unfolds.',
  },
  {
    icon: 'heart',
    title: 'Room for your story',
    description: 'Personal conversations, shaped around what matters to you.',
  },
  {
    icon: 'compass',
    title: 'Clarity for your next step',
    description: 'Traditional perspectives, shared with care and practical context.',
  },
]

function About({ compact = false }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id="about"
      className="about-section"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <div className="about-visual">
          <img
            src="/images/intentional-living.webp"
            alt="Natural quartz crystals, a ceramic bowl, and incense in soft morning sunlight"
            loading="lazy"
            decoding="async"
          />
          <div className="about-image-caption">
            <Icon name="leaf" />
            <span>A little space for balance.</span>
          </div>
        </div>

        <div className="about-copy">
          <p className="section-kicker">The heart of Ishana</p>
          <h2 id="about-title">
            Rooted in tradition.<br />
            <em>Guided by care.</em>
          </h2>
          <p>
            Your home holds your everyday life. Your questions hold the
            possibility of what comes next. At Ishana Vastu, we make room for
            both—with a calm, personal approach to vastu and spiritual wellness.
          </p>
          <p>
            Our professional team brings together Monica Saraswat, Naman
            Saraswat and Chandar S Gupta. Based in Alwar and available online
            worldwide, we offer guidance through vastu, healing practices,
            divination and personal consultation.
          </p>
          {!compact && (
            <p>
              Each consultation begins with listening. We explore your needs,
              explain the traditional perspective behind our guidance and help
              you consider thoughtful next steps at your own pace.
            </p>
          )}

          <div className="about-values">
            {values.map(({ icon, title, description }) => (
              <div className="about-value" key={title}>
                <span className="about-value-icon"><Icon name={icon} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>

          {compact && (
            <Link className="text-link" to="/about">
              Get to know us <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default About
