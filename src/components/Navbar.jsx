import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <NavLink to="/" className="brand" aria-label="Ishana Vastu home">
          <img
            src="/ishana-vastu.jpeg"
            alt="Ishana Vastu logo"
            className="brand-logo"
          />
        </NavLink>

        <nav className="nav">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <a
          className="nav-cta"
          href="https://calendar.app.google/AiYDcM6pdePHCUcq6"
          target="_blank"
          rel="noreferrer"
        >
          Book consultation
        </a>
      </div>
    </header>
  )
}

export default Navbar