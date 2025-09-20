import "./About.css";
import tesneem from "../assets/tesneem.png";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-top-card">
           <div className="about-header">
          <h1>
            <span className="gradient-text">About Me</span>
          </h1>
          <p className="about-subtitle">
            I’m Tesneem, an AI & Software Engineering student with a passion for building clean,
             scalable, and user-friendly applications. My journey into tech is fueled by curiosity
             and a love for solving problems through code. With growing skills in React, JavaScript,
             Python, C#, and SQL, I enjoy crafting solutions that balance creativity and functionality.
             My goal is to continue learning, exploring full-stack development,
             and contributing to impactful projects that make technology more accessible and meaningful.
          </p>
        </div>
         <div className="about-image">
                <img src={tesneem} alt="tesneem" />
              </div>

        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>My Journey</h3>
            <p>
              From <span className="highlight">QA Engineer</span> to <span className="highlight">Full-Stack Developer</span> - 
              I bring a unique quality-first approach to every line of code I write.
            </p>
          </div>

          <div className="about-card">
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
            <h3>My Approach</h3>
            <p>
              I don't just write code - I write <span className="highlight">tested, reliable code</span>. 
              My QA background ensures applications work seamlessly from day one.
            </p>
          </div>

      
        </div>
      
      </div>
    </section>
  );
}