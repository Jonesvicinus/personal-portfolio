import { useState, useEffect } from 'react'
import { personal } from '../data/content'

const NAV_LINKS = [
  { label: 'About',     href: '#hero' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'GitHub',    href: '#github' },
  { label: 'Contact',   href: '#contact' },
]

export default function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <span className="nav-name">{personal.name}</span>
        <ul className="nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.slice(1) ? 'active' : ''}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer" className="nav-resume">
              Resume ↓
            </a>
          </li>
        </ul>
        <button
          className="nav-hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={activeSection === href.slice(1) ? 'active' : ''}
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </a>
        ))}
        <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>
          Resume ↓
        </a>
      </div>
    </>
  )
}
