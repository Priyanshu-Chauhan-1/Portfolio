import './Skills.css'

const GROUPS = [
  { key: 'languages', label: 'Programming Languages', items: ['Java', 'SQL'] },
  { key: 'backend', label: 'Backend', items: ['Spring Boot', 'JPA', 'Hibernate', 'REST APIs', 'JWT'] },
  { key: 'frontend', label: 'Frontend', items: ['React.js', 'HTML', 'CSS'] },
  { key: 'databases', label: 'Databases', items: ['MySQL'] },
  { key: 'testing', label: 'Testing & Automation', items: ['Postman', 'Selenium WebDriver'] },
  { key: 'tools', label: 'Version Control', items: ['Git', 'GitHub'] },
  { key: 'core', label: 'Core', items: ['DSA (Learning)', 'OOPS'] },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="route-label">
        <span className="method">GET</span> /skills <span className="status">200 OK</span>
      </div>
      <h2 className="skills__heading">Stack</h2>

      <div className="skills__groups">
        {GROUPS.map((g) => (
          <div className="skills__group" key={g.key}>
            <div className="skills__group-label">{g.label}</div>
            <div className="skills__tags">
              {g.items.map((item) => (
                <span className="skills__tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
