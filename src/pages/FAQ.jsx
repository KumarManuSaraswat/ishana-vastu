import { useId, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'

const faqData = [
  {
    question: 'How do I choose the right consultation?',
    answer:
      'Start with the question you would like to explore. Vastu consultation focuses on your living or working space; tarot and kundli consultations offer spiritual perspectives; counselling and meditation support reflection and grounding. If you are unsure, send a short inquiry about your needs so the team can explain the available options.',
  },
  {
    question: 'Can I connect with you online?',
    answer:
      'Yes. Online consultations are available worldwide, and in-person sessions are available in Alwar, Rajasthan. Mention your preferred format when you inquire, and confirm the arrangements with the team before your appointment.',
  },
  {
    question: 'What should I prepare for my first session?',
    answer:
      'Make a short list of your main questions and what you hope to understand. For vastu, mention the type of space and ask which floor plans or photographs will be useful. For kundli consultation, ask which birth details are needed. For an online session, choose a quiet place with a reliable connection. The team can guide you on any service-specific preparation.',
  },
  {
    question: 'How do I book, and what does it cost?',
    answer:
      'Use “Book a consultation” to open the Google Calendar booking page, or contact the team on WhatsApp for help choosing a service. Fees are shared on inquiry and depend on the service and consultation type. Ask about the fee and session arrangements before confirming your appointment.',
  },
  {
    question: 'What can I expect from spiritual guidance?',
    answer:
      'The intention is to offer a thoughtful space for reflection, spiritual exploration, and personal clarity. Tarot, kundli, and energy-based practices are interpretive approaches; they do not guarantee outcomes or make decisions for you. You are encouraged to consider the guidance alongside your own circumstances and judgement.',
  },
  {
    question: 'Do healing services replace medical or mental health care?',
    answer:
      'Pranic healing, crystal-based practices, and other spiritual wellness services are complementary practices. They do not replace diagnosis, treatment, or support from a qualified medical or mental health professional. Continue any prescribed care and discuss health concerns with your clinician.',
  },
  {
    question: 'Who will I be speaking with?',
    answer:
      'Our professional team includes Monica Saraswat, Naman Saraswat, and Chandar S Gupta. Their work includes healing, divination, counselling, and vastu consultation. When you inquire, the team can help you connect with the practitioner for your chosen service.',
  },
  {
    question: 'How can I inquire about crystals and bracelets?',
    answer:
      'Contact the team through the inquiry form or WhatsApp to ask about available crystals and bracelets. Purchases are arranged directly. Ask about current availability, pricing, the material, and delivery arrangements before placing an order.',
  },
  {
    question: 'I have a question before booking. How can I reach you?',
    answer:
      'Send a message using the contact form or WhatsApp at +91 9413259480. Include the service you are interested in, a brief description of your question, and whether you prefer an online or in-person consultation. The team will respond as soon as possible.',
  },
]

function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  const accordionId = useId()

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const questionId = `${accordionId}-question-${index}`
        const answerId = `${accordionId}-answer-${index}`

        return (
          <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.question}>
            <button
              className="faq-question"
              id={questionId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            <div
              className="faq-answer-wrap"
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              hidden={!isOpen}
            >
              <div className="faq-answer"><p>{item.answer}</p></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function FAQPreview() {
  return (
    <section className="faq-preview" aria-labelledby="faq-preview-title">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="section-kicker">A little clarity</p>
          <h2 id="faq-preview-title">Feel at ease before you begin.</h2>
          <p>
            Choosing a consultation should feel comfortable. Here are a few
            things you may want to know before we connect.
          </p>
          <Link className="text-link" to="/faq">
            Explore all questions <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <FAQAccordion items={faqData.slice(0, 3)} />
      </div>
    </section>
  )
}

function FAQ() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="faq-page">
      <div className="container faq-layout">
        <motion.div
          className="faq-intro"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
        >
          <p className="section-kicker">Your questions, answered</p>
          <h1>A clearer beginning.</h1>
          <p>
            From choosing a service to preparing for your first conversation,
            find the details that help you take your next step with confidence.
          </p>
          <Link className="primary-btn" to="/contact">
            Ask us a question <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>
        <FAQAccordion items={faqData} />
      </div>
    </section>
  )
}

export default FAQ
