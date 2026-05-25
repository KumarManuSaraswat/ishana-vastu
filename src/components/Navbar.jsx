import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container navbar">
        <NavLink
          to="/"
          className="brand"
          aria-label="Ishana Vastu home"
          onClick={closeMenu}
        >
          <img
            src="/ishana-vastu.jpeg"
            alt="Ishana Vastu logo"
            className="brand-logo"
          />
        </NavLink>

        <nav className="nav desktop-nav">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <a
          className="nav-cta desktop-cta"
          href="https://calendar.app.google/AiYDcM6pdePHCUcq6"
          target="_blank"
          rel="noreferrer"
        >
          Book consultation
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="container mobile-menu-inner">
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
            <NavLink to="/faq" onClick={closeMenu}>
              FAQ
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

            <a
              className="nav-cta mobile-menu-cta"
              href="https://calendar.app.google/AiYDcM6pdePHCUcq6"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Book consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar