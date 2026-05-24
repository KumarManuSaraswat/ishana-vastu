import { motion } from 'motion/react'

function Contact() {
  return (
    <section className="contact-page">
      <div className="container contact-layout">
        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="section-kicker">Contact</p>
          <h1>Book a consultation or send an inquiry</h1>
          <p>
            Whether you are seeking vastu guidance, pranic healing, tarot
            clarity, or information about crystals, you can reach out in the
            way that feels most comfortable.
          </p>

          <div className="contact-actions">
            <a
              className="primary-btn"
              href="https://calendar.app.google/AiYDcM6pdePHCUcq6"
              target="_blank"
              rel="noreferrer"
            >
              Book consultation
            </a>

            <a
              className="secondary-btn"
              href="https://wa.me/919784102251"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="contact-info-list">
            <div className="contact-info-card">
              <span className="info-label">WhatsApp</span>
              <p>+91 9784102251</p>
            </div>

            <div className="contact-info-card">
              <span className="info-label">Location</span>
              <p>
                Apna Ghar Shalimar Ext., Tower-7, Flat No. 02, Alwar,
                Rajasthan, India
              </p>
            </div>

            <div className="contact-info-card">
              <span className="info-label">Availability</span>
              <p>Online worldwide • Offline in Alwar</p>
            </div>

            <div className="contact-info-card">
              <span className="info-label">Pricing</span>
              <p>Contact for pricing</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-shell"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
        >
          <div className="contact-form-card">
            <p className="form-kicker">Quick inquiry</p>
            <h2>Tell us how we can help</h2>

            <form
              className="contact-form"
              action="https://formsubmit.co/mrdisneyxd1983@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New Ishana Vastu inquiry" />
              <input type="hidden" name="_captcha" value="true" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/contact"
              />

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone or WhatsApp number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="+91..."
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="service">Service needed</label>
                <select id="service" name="service" defaultValue="" required>
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Vastu Consultancy</option>
                  <option>Pranic Healing</option>
                  <option>Tarot Guidance</option>
                  <option>Crystals & Bracelets</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us briefly what kind of guidance or support you are looking for"
                  required
                />
              </div>

              <button type="submit" className="primary-btn form-btn">
                Send inquiry
              </button>
            </form>

            <p className="contact-note">
              We usually respond as soon as possible. Your information will only
              be used to respond to your inquiry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact