import "./About.css";
import tesneem from "../assets/tesneem.png";

export default function About() {
  // Tech stack data for easier maintenance
  const techStack = [
    "Python", 
    "Java", 
    "React", 
    "SQL", 

    "JavaScript"
  ];

  return (
    <section id="about" className="about">
      <div className="about-content">
        {/* Top card with intro + image */}
        <div className="about-top-card">
          <div className="about-header">
            <h1>
              <span className="gradient-text">About Me</span>
            </h1>
            <p className="about-subtitle">
              I'm Tesneem (Tulakezi) Awuti, an AI & Software Engineering student with a passion for
              building clean, scalable, and user-friendly applications. My journey
              into tech is fueled by curiosity and a love for solving problems through
              code. With growing skills in React, JavaScript, Python, C#, and SQL,
              I enjoy crafting solutions that balance creativity and functionality.
              My goal is to continue learning, exploring full-stack development,
              and contributing to impactful projects that make technology more accessible
              and meaningful.
            </p>
          </div>
          <div className="about-image">
            <img src={tesneem} alt="Tesneem - AI & Software Engineering Student" />
          </div>
        </div>

        {/* Info cards */}
        <div className="about-grid">
          {/* Journey Card */}
          <div className="about-card">
            <h3>My Journey</h3>
            <p>
              From <span className="highlight">QA Engineer</span> to{" "}
              <span className="highlight">Full-Stack Developer</span> — I bring a
              unique quality-first approach to every line of code I write.
            </p>
            <a
              href="/Tesneem_Awuti_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-link"
              aria-label="Download Tesneem's CV (opens in new tab)"
            >
              View My CV
            </a>
          </div>

          {/* What I Do Card */}
          <div className="about-card">
            <h3>What I Do</h3>
            <p>
              I build robust web applications with modern technologies, ensuring
              quality through my <span className="highlight">ISTQB certification</span>{" "}
              and testing background.
            </p>
          </div>

          {/* Tech Stack Card */}
          <div className="about-card">
            <h3>Tech Stack</h3>
            <p>
              My toolbox includes modern languages and frameworks that help me
              build scalable, maintainable applications.
            </p>
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}