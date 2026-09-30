import { motion, useReducedMotion } from 'motion/react'

const practitioners = [
  {
    name: 'Monica Saraswat',
    image: '/mata shree.jpeg',
    role: 'Healing & spiritual guidance',
    experience: '16+ years of experience',
    description:
      'Monica brings a depth of experience in pranic healing, counselling and meditation, alongside tarot, aura reading, Lama Fera and crystal practices.',
  },
  {
    name: 'Naman Saraswat',
    image: '/naman bhaiya  PM.jpeg',
    role: 'Healing & intuitive insight',
    experience: '6+ years of experience',
    description:
      'Naman works with pranic and crystal healing, aura reading and divination through tarot, pendulum and palmistry, offering a personal space for reflection.',
  },
  {
    name: 'Chandar S Gupta',
    image: '/chandarshekhar dada.jpeg',
    role: 'Vastu & personal consultation',
    experience: 'Vastu consultant',
    description:
      'Chandar offers vastu guidance for homes and spaces, with consultations in numerology, pendulum, switch words, pranic healing and crystals.',
  },
]

function Team() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="team-section" aria-labelledby="team-title">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="section-kicker">People, before practices</p>
          <h2 id="team-title">Meet your <em>guides.</em></h2>
          <p>
            Three individual perspectives, one shared intention: to listen
            closely and help you find a way forward that feels considered.
          </p>
        </motion.div>

        <div className="team-grid">
          {practitioners.map((practitioner, index) => (
            <motion.article
              className="team-card"
              key={practitioner.name}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
            >
              <div className="team-photo">
                <img
                  src={practitioner.image}
                  alt={practitioner.name}
                  loading="lazy"
                  decoding="async"
                />
                <span className="team-experience">{practitioner.experience}</span>
              </div>
              <div className="team-card-copy">
                <p className="team-role">{practitioner.role}</p>
                <h3>{practitioner.name}</h3>
                <p>{practitioner.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
