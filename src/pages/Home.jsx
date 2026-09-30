import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'
import Team from '../components/Team'
import { FAQPreview } from './FAQ'
import ConsultationCTA from '../components/ConsultationCTA'
export default function Home() {
  return <><Hero /><Services compact /><About compact /><HowItWorks /><Team /><FAQPreview /><ConsultationCTA /></>
}
