import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const faqData = [
  {
    question: 'What services does Ishana Vastu offer?',
    answer:
      'Ishana Vastu offers vastu consultation, pranic healing, tarot guidance, pendulum guidance, aura reading, aura tracing, counselling, meditation support, crystal healing, kundli consultation, and crystal-related guidance through a calm and personal consultation approach.',
  },
  {
    question: 'Who are the practitioners behind Ishana Vastu?',
    answer:
      'Ishana Vastu is a family-led practice with Monica Saraswat, Naman Saraswat, and Chandar S Gupta. The team brings together experience in healing, divination, counselling, and vastu consultation.',
  },
  {
    question: 'Are consultations available online?',
    answer:
      'Yes. Online consultations are available for clients worldwide, making it possible to connect from any location.',
  },
  {
    question: 'Do you offer offline sessions?',
    answer:
      'Yes. Offline sessions are available in Alwar, Rajasthan.',
  },
  {
    question: 'How do I book a consultation?',
    answer:
      'You can book a consultation through the booking button on the website, which opens the Google Calendar booking page. You may also reach out on WhatsApp if you would like help before booking.',
  },
  {
    question: 'Is tarot guidance available?',
    answer:
      'Yes. Tarot guidance is offered as a reflective and supportive practice for clarity, self-awareness, and decision-making.',
  },
  {
    question: 'Are crystals and bracelets available for purchase online?',
    answer:
      'Crystals and bracelets are currently showcased on the website, and purchases are handled through direct inquiry rather than instant online checkout.',
  },
  {
    question: 'What is the pricing?',
    answer:
      'Pricing is shared on inquiry depending on the service, consultation type, and support required.',
  },
  {
    question: 'How soon will I receive a response to an inquiry?',
    answer:
      'The team aims to respond as soon as possible after receiving your inquiry through the contact form or WhatsApp.',
  },
]

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onClick} type="button">
        <span>{item.question}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-answer-wrap"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-page">
      <div className="container faq-layout">
        <motion.div
          className="faq-intro"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="section-kicker">FAQ</p>
          <h1>Questions people often ask before booking</h1>
          <p>
            Clear answers help visitors feel informed, comfortable, and ready to
            take the next step with Ishana Vastu.
          </p>
        </motion.div>

        <motion.div
          className="faq-list"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ