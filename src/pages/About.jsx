import AboutSection from '../components/About'
import Team from '../components/Team'

function About() {
  return (
    <>
      <header className="page-heading">
        <div className="container">
          <p className="section-kicker">About Ishana Vastu</p>
          <h1>A personal approach to<br /><em>a more harmonious life.</em></h1>
          <p>
            Get to know the people and intention behind our practice—rooted in
            Alwar, connected with you wherever you are.
          </p>
        </div>
      </header>
      <AboutSection />
      <Team />
    </>
  )
}

export default About
