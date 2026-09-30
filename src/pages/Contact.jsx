import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { useSearchParams } from 'react-router-dom'

const serviceNames = [
  'Vastu Consultancy',
  'Pranic Healing',
  'Tarot Guidance',
  'Pendulum Guidance',
  'Aura Reading & Tracing',
  'Crystal Healing & Therapies',
  'Counselling & Meditation',
  'Kundli Consultation',
  'Crystals & Bracelets',
  'Help me choose a service',
]

function Contact() {
  const [searchParams] = useSearchParams()
  const requestedServiceParam = searchParams.get('service')
  const requestedService = serviceNames.includes(requestedServiceParam)
    ? requestedServiceParam
    : ''
  const [previousRequestedService, setPreviousRequestedService] = useState(requestedService)
  const [service, setService] = useState(requestedService)
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const shouldReduceMotion = useReducedMotion()

  // Apply a newly requested service without resetting the user's other fields.
  if (requestedService !== previousRequestedService) {
    setPreviousRequestedService(requestedService)
    setService(requestedService)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'submitting') return

    const form = event.currentTarget
    const formData = new FormData(form)
    setStatus('submitting')
    setStatusMessage('Sending your inquiry…')

    try {
      const isLocalPreview = ['localhost', '127.0.0.1', '[::1]'].includes(
        window.location.hostname,
      )
      if (isLocalPreview) {
        throw new Error(
          'This preview cannot receive inquiries. The form works on the hosted website; you can reach us on WhatsApp below in the meantime.',
        )
      }

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })

      if (!response.ok) {
        throw new Error(
          'Your inquiry could not be sent. Your details are still here—please try again, or contact us on WhatsApp.',
        )
      }

      setStatus('success')
      setStatusMessage(
        'Thank you. Your inquiry has been received, and the team will contact you using the number you shared.',
      )
      form.reset()
      setService('')
    } catch (error) {
      setStatus('error')
      setStatusMessage(
        error instanceof TypeError
          ? 'We could not connect to send your inquiry. Your details are still here—check your connection and try again, or contact us on WhatsApp.'
          : error.message,
      )
    }
  }

  return (
    <section className="contact-page">
      <div className="container contact-layout">
        <motion.div
          className="contact-intro"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
        >
          <p className="section-kicker">Let’s connect</p>
          <h1>Your next step begins with a conversation.</h1>
          <p>
            Tell us what you would like to explore: a more balanced space,
            personal clarity, or a moment to reconnect with yourself. We will
            help you understand which consultation may suit your needs.
          </p>

          <div className="contact-actions">
            <a
              className="primary-btn"
              href="https://calendar.app.google/AiYDcM6pdePHCUcq6"
              target="_blank"
              rel="noreferrer"
            >
              Book a consultation <span aria-hidden="true">↗</span>
            </a>
            <a
              className="secondary-btn"
              href="https://wa.me/919413259480"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="contact-info-list contact-details">
            <div className="contact-info-card">
              <span className="info-label">A direct conversation</span>
              <p><a href="tel:+919413259480">+91 9413259480</a></p>
            </div>
            <div className="contact-info-card">
              <span className="info-label">Visit us in Alwar</span>
              <p>
                Apna Ghar Shalimar Ext., Tower-7, Flat No. 02, Alwar,
                Rajasthan, India
              </p>
            </div>
            <div className="contact-info-card">
              <span className="info-label">Ways to meet</span>
              <p>Online worldwide · In person in Alwar</p>
            </div>
            <div className="contact-info-card">
              <span className="info-label">Consultation fees</span>
              <p>Shared on inquiry, based on the service you choose.</p>
            </div>
          </div>

          <div className="contact-preparation">
            <p className="section-kicker">Before we meet</p>
            <h2>A little preparation goes a long way.</h2>
            <p>
              Write down your main questions and the kind of guidance you are
              looking for. For a vastu inquiry, mention whether it concerns a
              home, office, or another space. We will let you know if any plans,
              photographs, or other details are needed for your consultation.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-shell"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.08, ease: 'easeOut' }}
        >
          <div className="contact-form-card">
            <p className="form-kicker">Send an inquiry</p>
            <h2>What’s on your mind?</h2>
            <p className="contact-note">
              Share a few details below. All fields are required.
            </p>

            <form
              name="contact"
              method="POST"
              action="/"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="contact-form"
              onSubmit={handleSubmit}
              aria-busy={status === 'submitting'}
              aria-describedby="contact-form-status"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Leave this field empty: <input name="bot-field" tabIndex="-1" autoComplete="off" />
                </label>
              </p>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone or WhatsApp number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Include your country code"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="service">What would you like guidance with?</label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  required
                  disabled={status === 'submitting'}
                >
                  <option value="" disabled>Select a service</option>
                  {serviceNames.map((name) => <option key={name} value={name}>{name}</option>)}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us what you would like to explore, and whether you prefer an online or in-person consultation."
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <button
                type="submit"
                className="primary-btn form-btn"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending inquiry…' : status === 'error' ? 'Try sending again' : 'Send inquiry'}
                <span aria-hidden="true">↗</span>
              </button>
            </form>

            <div
              id="contact-form-status"
              className={`form-status${status === 'error' ? ' form-status-error' : status === 'success' ? ' form-status-success' : ''}`}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {statusMessage && <p>{statusMessage}</p>}
              {status === 'error' && (
                <a href="https://wa.me/919413259480" target="_blank" rel="noreferrer">
                  Send your inquiry on WhatsApp <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            <p className="contact-note">
              Your information is used to respond to your inquiry. Please share
              only the details needed to begin the conversation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
