import { useState, useRef, useEffect } from 'react'
import './Contact.css'
import { MdEmail, MdContentCopy, MdCheck } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'

function Contact() {
  const [copied, setCopied] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const dropdownRef = useRef(null)
  
  const EMAIL = 'priyanshuchauhan19705@gmail.com'
  const SUBJECT = "Let's Connect"
  const BODY = "Hi Priyanshu,\n\nI came across your portfolio and wanted to connect regarding..."

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
        setShowOptions(false)
      }, 1500)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const openGmail = () => {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`
    window.open(url, '_blank')
    setShowOptions(false)
  }

  const openMailto = () => {
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`
    setShowOptions(false)
  }

  return (
    <section id="contact" className="section contact">
      <div className="route-label">
        <span className="method">GET</span> /contact
      </div>
      
      <h2 className="contact__heading">Let's build something.</h2>
      <p className="contact__sub">
        Open to full-time roles and internships. Reach out through any of these channels.
      </p>

      <div className="contact__buttons">
        
        {/* Email Button with Modern Dropdown */}
        <div className="contact-btn-wrapper" ref={dropdownRef}>
          <button
            onClick={() => setShowOptions(!showOptions)}
            className={`contact-btn contact-btn--email ${showOptions ? 'active' : ''}`}
            aria-label="Email options"
          >
            <MdEmail className="contact-btn__icon" />
            <div className="contact-btn__content">
              <span className="contact-btn__label">Send Email</span>
              <span className="contact-btn__value">{EMAIL}</span>
            </div>
            <svg 
              className={`contact-btn__chevron ${showOptions ? 'rotated' : ''}`}
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {/* Modern Compact Dropdown */}
          {showOptions && (
            <div className="email-dropdown">
              <button onClick={openGmail} className="email-dropdown__item">
                <span className="email-dropdown__icon">
                  <HiOutlineExternalLink size={16} />
                </span>
                <span>Open in Gmail</span>
              </button>

              <button onClick={openMailto} className="email-dropdown__item">
                <span className="email-dropdown__icon">
                  <MdEmail size={16} />
                </span>
                <span>Open Email App</span>
              </button>

              <div className="email-dropdown__divider"></div>

              <button onClick={copyEmail} className="email-dropdown__item">
                <span className="email-dropdown__icon">
                  {copied ? (
                    <MdCheck size={16} style={{color: '#4ade80'}} />
                  ) : (
                    <MdContentCopy size={16} />
                  )}
                </span>
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>
          )}
        </div>

        {/* GitHub Button */}
        <a
          href="https://github.com/Priyanshu-Chauhan-1"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn contact-btn--github"
          aria-label="GitHub"
        >
          <FaGithub className="contact-btn__icon" />
          <div className="contact-btn__content">
            <span className="contact-btn__label">GitHub</span>
            <span className="contact-btn__value">@Priyanshu-Chauhan-1</span>
          </div>
          <span className="contact-btn__arrow">→</span>
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/priyanshuchauhan1/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn contact-btn--linkedin"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="contact-btn__icon" />
          <div className="contact-btn__content">
            <span className="contact-btn__label">LinkedIn</span>
            <span className="contact-btn__value">priyanshuchauhan1</span>
          </div>
          <span className="contact-btn__arrow">→</span>
        </a>

      </div>

      <div className="contact__availability">
        <span className="status-dot"></span>
        <span>Available for opportunities</span>
      </div>

    </section>
  )
}

export default Contact