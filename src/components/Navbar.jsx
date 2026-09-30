import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Brand from './Brand'
import Icon from './Icon'
const links = [['/', 'Home'], ['/about', 'Our story'], ['/services', 'Services'], ['/faq', 'FAQs'], ['/contact', 'Contact']]
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef(null)
  const closeMenu = () => setMenuOpen(false)
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event) => { if (event.key === 'Escape') { setMenuOpen(false); toggleRef.current?.focus() } }
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => { document.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize) }
  }, [menuOpen])
  return <header className="site-header">
    <div className="container navbar">
      <NavLink to="/" className="brand" aria-label="Ishana Vastu home" onClick={closeMenu}><Brand /></NavLink>
      <nav className="nav desktop-nav" aria-label="Main navigation">{links.map(([url, label]) => <NavLink key={url} to={url} end={url === '/'}>{label}</NavLink>)}</nav>
      <a className="nav-cta desktop-cta" href="https://calendar.app.google/AiYDcM6pdePHCUcq6" target="_blank" rel="noreferrer">Book a consultation <Icon name="arrow-up" size={17} /></a>
      <button ref={toggleRef} type="button" className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
    </div>
    <nav className="mobile-menu" id="mobile-menu" aria-label="Mobile navigation" hidden={!menuOpen}>
      <div className="container mobile-menu-inner">{links.map(([url,label]) => <NavLink key={url} to={url} end={url==='/'} onClick={closeMenu}>{label}<Icon name="arrow" size={18} /></NavLink>)}<a className="primary-btn" href="https://calendar.app.google/AiYDcM6pdePHCUcq6" target="_blank" rel="noreferrer" onClick={closeMenu}>Book a consultation <Icon name="arrow-up" size={18} /></a></div>
    </nav>
  </header>
}
