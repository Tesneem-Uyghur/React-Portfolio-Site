import "./Projects.css";
import spa from "../assets/spa.png";
import portfolio from "../assets/portfolio.png";
import planner from "../assets/planner.jpg";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <div className="projects-header">
          <h1>
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="projects-subtitle">
            A showcase of my development journey and technical expertise
          </p>
        </div>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              <img src={planner} alt="assignment tracker" />
            </div>


            <div className="project-content">
              <h3 className="project-title"></h3>
              <p className="project-description">
                Developed a comprehensive test automation framework for Adobe Magento e-commerce platform using Selenium WebDriver and Java. Integrated with CI/CD pipelines to ensure quality releases.
              </p>

              <div className="project-details">
                <div className="project-role">
                  <strong>My Role:</strong> Lead QA Automation Engineer
                </div>
                <div className="project-outcome">
                  <strong>Outcome:</strong> Reduced manual testing time by 70% and improved release confidence through automated regression testing.
                </div>
              </div>

              <div className="tech-stack">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Selenium</span>
                <span className="tech-tag">TestNG</span>
                <span className="tech-tag">Jenkins</span>
                <span className="tech-tag">Git</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/yourusername/ecommerce-automation" target="_blank" rel="noreferrer" className="project-link">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href="https://demo-link.com" target="_blank" rel="noreferrer" className="project-link">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

  
          <div className="project-card">
            <div className="project-image">
               <img src={portfolio} alt="Personal Portfolio Website" />
            </div>

            <div className="project-content">
              <h3 className="project-title">Personal Portfolio Website</h3>
              <p className="project-description">
                Built a responsive React-based portfolio website showcasing my development journey from QA to full-stack development. Features modern design with smooth animations.
              </p>

              <div className="project-details">
                <div className="project-role">
                  <strong>My Role:</strong> Full-Stack Developer & Designer
                </div>
                <div className="project-outcome">
                  <strong>Outcome:</strong> Created a professional online presence that effectively communicates my skills and experience to potential employers.
                </div>
              </div>

              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">Git</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noreferrer" className="project-link">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href="https://your-portfolio.com" target="_blank" rel="noreferrer" className="project-link">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

   {/* Project 3 */}
<div className="project-card">
  <div className="project-image">
    <div className="project-image">
  <img src={spa} alt="Orchid Bloom Spa Website" />
</div>
  </div>

  <div className="project-content">
    <h3 className="project-title">Orchid Bloom Spa Website</h3>
    <p className="project-description">
      Designed and developed a multi-page website for a fictional spa and wellness center. 
      The site includes a home page, detailed services (massage therapy, facials, steam & sauna), 
      appointment booking, customer support, and legal/policy pages.
    </p>

    <div className="project-details">
      <div className="project-role">
        <strong>My Role:</strong> Front-End Developer & Designer
      </div>
      <div className="project-outcome">
        <strong>Outcome:</strong> Delivered a responsive and user-friendly site that showcases spa 
        services, improves customer engagement, and allows seamless appointment booking.
      </div>
    </div>

    <div className="tech-stack">
      <span className="tech-tag">HTML5</span>
      <span className="tech-tag">CSS3</span>
      <span className="tech-tag">JavaScript</span>
    </div>

    <div className="project-links">
      <a href="https://github.com/yourusername/spa-website" target="_blank" rel="noreferrer" className="project-link">
        <i className="fab fa-github"></i> Code
      </a>
      <a href="https://your-live-demo-link.com" target="_blank" rel="noreferrer" className="project-link">
        <i className="fas fa-external-link-alt"></i> Live Demo
      </a>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}
