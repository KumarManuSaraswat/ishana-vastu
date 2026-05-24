import { motion } from 'motion/react'

function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="section-kicker">Meet the team</p>
          <h2>The practitioners behind Ishana Vastu</h2>
          <p>
            A family-led practice offering vastu guidance, healing support,
            spiritual insight, and personal consultation with care and clarity.
          </p>
        </motion.div>

        <div className="team-grid">
          <motion.article
            className="team-card"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="team-avatar">MS</div>
            <p className="team-role">Pranic Healing & Spiritual Guidance</p>
            <h3>Monica Saraswat</h3>
            <p>
              Monica Saraswat brings 16+ years of experience in pranic healing,
              counselling, Lama Fera, aura reading, crystal therapies,
              meditation, crystal healing, pendulum, and tarot.
            </p>
          </motion.article>

          <motion.article
            className="team-card"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="team-avatar">NS</div>
            <p className="team-role">Pranic Healing, Divination & Crystal Work</p>
            <h3>Naman Saraswat</h3>
            <p>
              Naman Saraswat has 6+ years of experience in pranic healing, aura
              reading, aura tracing, divination through pendulum, tarot and
              palmistry, advanced healing, crystal healing, psychotherapy, and
              energizing or programming crystals.
            </p>
          </motion.article>

          <motion.article
            className="team-card"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="team-avatar">CG</div>
            <p className="team-role">Vastu & Consultation</p>
            <h3>Chandar S Gupta</h3>
            <p>
              Chandar S Gupta is a vastu expert and consultant who also offers
              pendulum and kundli consultation, helping clients seek clarity,
              balance, and practical direction for their homes and spaces.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default Team