import { motion } from 'motion/react'

function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <div className="container about-grid">
        <div className="about-copy">
          <p className="section-kicker">About Ishana Vastu</p>
          <h2>
            A grounded practice for harmonious spaces, healing support, and
            spiritual clarity.
          </h2>
          <p>
            Ishana Vastu is a family-led consultation practice offering vastu
            guidance, pranic healing, tarot insight, crystal support,
            counselling, aura work, and spiritual wellness services for people
            seeking more balance in life and space.
          </p>
          <p>
            The practice brings together Monica Saraswat, Naman Saraswat, and
            Chandar S Gupta, combining healing, divination, counselling, and
            vastu consultation in a calm, personal, and professional approach.
          </p>
        </div>

        <div className="about-panel">
          <div className="about-badge">Online worldwide</div>
          <div className="about-badge">Offline in Alwar</div>
          <div className="about-badge">Contact for pricing</div>
          <div className="about-badge">Family-led practice</div>
        </div>
      </div>
    </motion.section>
  )
}

export default About