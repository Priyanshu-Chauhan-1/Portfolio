import './Projects.css'

const PROJECTS = [
  {
    name: 'verifylayer-ai',
    period: 'May 2026 — Present',
    description: 'Scalable REST APIs built with Java, Spring Boot, Spring Data JPA, Hibernate, and MySQL. JWT authentication, AI API integrations, and a secure backend following layered architecture principles.',
    tags: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'MySQL', 'JWT'],
    repo: null,
    live: 'https://www.verifylayerai.in/',
  },
  {
    name: 'website-crawler-chatbot',
    period: 'Dec 2025 — Feb 2026',
    description: 'Intelligent website crawler that automatically explores and extracts content from 18+ pages (Home, About, Services, Contact, Blog). AI-powered QA system using the Perplexity Pro API to answer questions from crawled data, with clean markdown processing.',
    tags: ['Java', 'AI APIs', 'Web Crawling'],
    repo: 'https://github.com/Priyanshu-Chauhan-1/Website-Crawler-Chatbot',
    live: null,
  },
  {
    name: 'alt-text-extractor',
    period: 'Jul 2025 — Nov 2025',
    description: 'Chrome extension that scans web pages and extracts every image alt-text attribute for accessibility analysis. One-click popup with copy-to-clipboard, built for QA teams and web developers to catch missing alt text across entire sites.',
    tags: ['JavaScript', 'Chrome Extension', 'Accessibility'],
    repo: 'https://github.com/Priyanshu-Chauhan-1/Extension',
    live: null,
  },
  {
    name: 'Movie Ticket Booking',
    period: 'In progress',
    description: 'Something new is in the works — check back soon, or ask me about it directly.',
    tags: ['Coming soon'],
    repo: null,
    live: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="route-label">
        <span className="method">GET</span> /projects <span className="status">200 OK</span>
      </div>
      <h2 className="projects__heading">Things I've built</h2>

      <div className="projects__grid">
        {PROJECTS.map((p) => (
          <article className="project-card" key={p.name}>
            <div className="project-card__header">
              <span className="project-card__icon">◧</span>
              <span className="project-card__name">{p.name}</span>
            </div>
            {p.period && <div className="project-card__period">{p.period}</div>}
            <p className="project-card__desc">{p.description}</p>
            <div className="project-card__tags">
              {p.tags.map((t) => (
                <span className="project-card__tag" key={t}>{t}</span>
              ))}
            </div>
            {(p.repo || p.live) && (
              <div className="project-card__links">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">source →</a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer">live →</a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
