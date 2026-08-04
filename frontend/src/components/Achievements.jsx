import './Achievements.css'

const ENTRIES = [
  {
    hash: 'c4f0a12',
    date: '2025',
    role: 'SIH 2025 — Internal Hackathon',
    org: 'Smart India Hackathon',
    summary: 'Competed in the internal round of Smart India Hackathon 2025.',
  },
  {
    hash: '9d21e6b',
    date: '2025',
    role: 'HackerRank — SQL (Basic)',
    org: 'Certification',
    summary: 'Certified in core SQL fundamentals on HackerRank.',
    link : 'https://www.hackerrank.com/certificates/57a5f8051d62'
  },
]

function Achievements() {
  return (
    <section id="achievements" className="section experience">
      <div className="route-label">
        <span className="method">GET</span> /achievements <span className="status">200 OK</span>
      </div>
      <h2 className="experience__heading">
        <span className="experience__prompt">$</span> git log --oneline --graph
      </h2>

      <div className="experience__log">
        {ENTRIES.map((e, i) => (
          <div className="experience__entry" key={e.hash}>
            <div className="experience__rail">
              <span className="experience__dot" />
              {i < ENTRIES.length - 1 && <span className="experience__line" />}
            </div>
            <div className="experience__content">
              <div className="experience__meta">
                <span className="experience__hash">{e.hash}</span>
                <span className="experience__date">{e.date}</span>
              </div>
              <div className="experience__role">
                {e.role} <span className="experience__org">— {e.org}</span>
              </div>
              <p className="experience__summary">{e.summary}</p>
              {e.link && (
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience__link"
                >
                  view certificate →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
