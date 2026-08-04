import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="route-label">
        <span className="method">GET</span> /about <span className="status">200 OK</span>
      </div>

      <div className="about__grid">
        <div className="about__text">
          <h2 className="about__heading">A little about the person behind the API keys.</h2>
          <p className="about__p">
            I'm a backend developer skilled in Java, Spring Boot, MySQL, REST APIs,
            JPA/Hibernate, and JWT authentication. I'm passionate about building scalable
            backend systems and integrating AI-powered solutions while following clean
            architecture and best development practices.
          </p>
          <p className="about__p">
            Recent work spans REST API design with layered architecture, AI-powered tooling
            (crawlers, QA systems on top of LLM APIs), and browser extensions built for
            real developer workflows — not just demos.
          </p>
        </div>

        <div className="about__panel">
          <div className="about__panel-header">response.json</div>
          <pre className="about__code">{`{
  "name": "Priyanshu Chauhan",
  "role": "Backend Developer",
  "location": "India",
  "focus": [
    "Java / Spring Boot",
    "REST API design",
    "AI-integrated backends"
  ],
  "available_for": "full-time, internships",
  "status": "open_to_work"
}`}</pre>
        </div>
      </div>
    </section>
  )
}

export default About
