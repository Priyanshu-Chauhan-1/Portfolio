// import { useState } from 'react'
// import './Contact.css'

// function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' })

//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
//     const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
//     window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}` // TODO: replace with your real email
//   }

//   return (
//     <section id="contact" className="section contact">
//       <div className="route-label">
//         <span className="method">POST</span> /contact
//       </div>
//       <h2 className="contact__heading">Let's build something.</h2>
//       <p className="contact__sub">
//         Open to full-time roles and internships. The fastest way to reach me is
//         the form below — it opens your email client with everything pre-filled.
//       </p>

//       <form className="contact__form" onSubmit={handleSubmit}>
//         <div className="contact__field">
//           <label htmlFor="name">name</label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             required
//             value={form.name}
//             onChange={handleChange}
//             placeholder="John Doe"
//           />
//         </div>

//         <div className="contact__field">
//           <label htmlFor="email">email</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             value={form.email}
//             onChange={handleChange}
//             placeholder="john@example.com"
//           />
//         </div>

//         <div className="contact__field">
//           <label htmlFor="message">message</label>
//           <textarea
//             id="message"
//             name="message"
//             rows="4"
//             required
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Tell me about the role or project..."
//           />
//         </div>

//         <button type="submit" className="btn btn--primary contact__submit">
//           Send
//         </button>
//       </form>

//       <div className="contact__direct">
//         or reach me directly at{' '}
//         <a href="mailto:priyanshuchauhan19705@gmail.com">priyanshuchauhan19705@gmail.com</a> ·{' '}
//         <a href="https://github.com/Priyanshu-Chauhan-1" target="_blank" rel="noopener noreferrer">github</a> ·{' '}
//         <a href="https://www.linkedin.com/in/priyanshuchauhan1/" target="_blank" rel="noopener noreferrer">linkedin</a>
//       </div>
//     </section>
//   )
// }

// export default Contact

import { useState } from 'react'
import './Contact.css'
// import icons
import { MdEmail } from 'react-icons/md'        // Email icon
import { FaGithub } from 'react-icons/fa'        // GitHub icon
import { FaLinkedin } from 'react-icons/fa'      // LinkedIn icon


// TODO: replace with your deployed Spring Boot API URL once it's live,
// e.g. 'https://your-backend.onrender.com/api/contact'
const API_URL = 'http://localhost:8080/api/contact'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="route-label">
        <span className="method">POST</span> /contact
      </div>
      <h2 className="contact__heading">Let's build something.</h2>
      <p className="contact__sub">
         Open to full-time roles and internships. The fastest way to reach me is
        the form below — it opens your email client with everything pre-filled.
      </p>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__field">
          <label htmlFor="name">name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Doe"
          />
        </div>

        <div className="contact__field">
          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
          />
        </div>

        <div className="contact__field">
          <label htmlFor="message">message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about the role or project..."
          />
        </div>

        <button
          type="submit"
          className="btn btn--primary contact__submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'send'}
        </button>

        {status === 'success' && (
          <p className="contact__status contact__status--success">
            Message sent — thanks, I'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="contact__status contact__status--error">
            Something went wrong. Try again, or email me directly below.
          </p>
        )}
      </form>

      {/* ✅ Attractive social section */}
<div className="contact__direct">
  <p className="contact__direct-text">or reach me directly</p>
  
  <div className="contact__socials">
    
    {/* <a
      href="mailto:priyanshuchauhan19705@gmail.com"
      className="social-link"
      aria-label="Email"
    >
      <MdEmail className="social-icon" />
      <span className="social-label">Email</span>
    </a> */}

    <a
      href="https://github.com/Priyanshu-Chauhan-1"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label="GitHub"
    >
      <FaGithub className="social-icon" />
      <span className="social-label">GitHub</span>
    </a>

    <a
      href="https://www.linkedin.com/in/priyanshuchauhan1/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      aria-label="LinkedIn"
    >
      <FaLinkedin className="social-icon" />
      <span className="social-label">LinkedIn</span>
    </a>

  </div>
</div>
    </section>
  )
}

export default Contact