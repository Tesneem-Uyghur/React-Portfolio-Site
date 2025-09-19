import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-header">
          <h1>
            <span className="gradient-text">About Me</span>
          </h1>
          <p className="about-subtitle">
            Junior Full-Stack Developer with a Quality-First Mindset
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">🚀</div>
            <h3>My Journey</h3>
            <p>
              From <span className="highlight">QA Engineer</span> to <span className="highlight">Full-Stack Developer</span> - 
              I bring a unique quality-first approach to every line of code I write.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">💻</div>
            <h3>What I Do</h3>
            <p>
              I build robust web applications with modern technologies, ensuring quality through my 
              <span className="highlight"> ISTQB certification</span> and testing background.
            </p>
            <div className="tech-stack">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">SQL</span>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">🎯</div>
            <h3>My Approach</h3>
            <p>
              I don't just write code - I write <span className="highlight">tested, reliable code</span>. 
              My QA background ensures applications work seamlessly from day one.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🌟</div>
            <h3>Beyond Code</h3>
            <p>
              When I'm not coding, I volunteer as a <span class="highlight">language teacher</span>, 
              helping preserve cultural heritage while developing my mentoring skills.
            </p>
          </div>
        </div>

        <div className="about-cta">
          <h2>Let's Build Something Amazing Together</h2>
          <div className="social-icons">
            <a href="mailto:tawuti@my.centennialcollege.ca" target="_blank" rel="noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/tesneem-awut" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <button className="contact-btn">Get In Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
}