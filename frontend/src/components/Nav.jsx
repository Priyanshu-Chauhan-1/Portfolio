import { useEffect, useState } from 'react'
import './Nav.css'

const ROUTES = [
  { label: '/about', href: '#about' },
  { label: '/skills', href: '#skills' },
  { label: '/projects', href: '#projects' },
  { label: '/achievements', href: '#achievements' },
  { label: '/contact', href: '#contact' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo">
          <span className="nav__prompt">~/</span>Priyanshu
        </a>

        <nav className="nav__routes">
          {ROUTES.map((r) => (
            <a key={r.href} href={r.href} className="nav__route">
              <span className="nav__method">GET</span>
              {r.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '[ x ]' : '[ menu ]'}
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {ROUTES.map((r) => (
            <a key={r.href} href={r.href} className="nav__route" onClick={() => setOpen(false)}>
              <span className="nav__method">GET</span>
              {r.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Nav
