import { useEffect, useState } from 'react'
import './Hero.css'

const LINES = [
  { prompt: '$', text: 'whoami' },
  { prompt: '>', text: 'Priyanshu Chauhan — Backend Developer', dim: true },
  { prompt: '$', text: 'cat mission.txt' },
  { prompt: '>', text: 'Build scalable backend systems, powered by clean architecture and AI.', dim: true },
]

function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (visibleLines >= LINES.length) {
      setDone(true)
      return
    }
    const current = LINES[visibleLines]
    if (charCount < current.text.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 18)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1)
      setCharCount(0)
    }, 260)
    return () => clearTimeout(t)
  }, [charCount, visibleLines])

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="route-label">
          <span className="method">GET</span> /home <span className="status">200 OK</span>
        </div>

        <div className="hero__terminal" role="img" aria-label="Terminal introduction: whoami returns Priyanshu Chauhan, Backend Developer. Mission: build scalable backend systems, powered by clean architecture and AI.">
          {LINES.map((line, i) => {
            if (i > visibleLines) return null
            const isCurrent = i === visibleLines
            const text = isCurrent ? line.text.slice(0, charCount) : line.text
            return (
              <div key={i} className={`hero__line ${line.dim ? 'hero__line--dim' : ''}`}>
                <span className="hero__prompt">{line.prompt}</span>
                <span>{text}</span>
                {isCurrent && !done && <span className="hero__cursor" />}
              </div>
            )
          })}
          {done && <span className="hero__cursor hero__cursor--idle" />}
        </div>

        <h1 className="hero__headline">
          I build backend systems<br />that don't fall over.
        </h1>

        <p className="hero__sub">
          Backend developer skilled in Java, Spring Boot, MySQL, REST APIs, JPA/Hibernate,
          and JWT authentication — passionate about scalable systems and integrating
          AI-powered solutions with clean architecture.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            Projects
          </a>
          <a href="Priyanshu_Chauhan_CV.pdf" className="btn btn--ghost" download>
            Resume
          </a>
          <a href="#contact" className="btn btn--ghost">
            Connect
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
