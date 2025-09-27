import "./Home.css"; // Import CSS for styling
import profilePic from "../assets/profilePic.png";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
      <h1>
          <span className="gradient-text">I’m Tesneem</span>
          <br />
          A learner and builder <br />
          crafting simple and impactful solutions.
        </h1>
        <p>
        AI & Software Engineering student, aspiring full-stack developer with skills in React, Python, Java, C#, and SQL.

        </p>

        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>

           <a href="mailto:tawuti@my.centennialcollege.ca">
                  <button className="contact-btn">Hire Me</button>
                </a>

          
        </div>
      </div>

      <div className="home-image">
        <img src={profilePic} alt="ProfilePic" />

      </div>
    </section>
  );
}
