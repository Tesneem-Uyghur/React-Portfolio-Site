import "./Projects.css";
import spa from "../assets/spa.png";
import portfolio from "../assets/portfolio.png";
import planner from "../assets/planner.jpg";
import { useState, useEffect } from "react";
import { getAllProjects, addProject, deleteProject } from "../api/projectService";
import { isAuthenticated } from "../auth/auth-helper";
import { useNavigate } from "react-router-dom";


export default function Projects() {

  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "", technologies: "", link: "" });
  const auth = isAuthenticated();
  const isLoggedIn = !!auth;
  const isUser = auth && auth.user.role === "User";
  const isAdmin = auth && auth.user.role === "Admin";

  const navigate = useNavigate();

  

  useEffect(() => {
    getAllProjects().then(setProjects);
  }, []);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    addProject(formData).then(() => {
      alert("Project added!");
      setFormData({ title: "", description: "", technologies: "", link: "" });
      getAllProjects().then(setProjects);
    });
  };

  const handleDelete = id => {
    deleteProject(id).then(() => getAllProjects().then(setProjects));
  };

  

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
              <h3 className="project-title">Assignment Tracker</h3>
              <p className="project-description">
               A responsive app for tablets and phones that helps students organize assignments by subject, type, and due date. It includes quick task entry, filtering for upcoming deadlines, and a mobile-first design that makes tracking coursework simple and convenient.              </p>


              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Css</span>
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">Git</span>
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
              Built with React to showcase my transition from QA to full-stack development, this portfolio highlights key projects and skills. It features a modern design with smooth animations, professional layout, and a clear structure that makes information easy to navigate.</p>

              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">Git</span>
              </div>

            </div>
          </div>

   {/* Project 3 */}
<div className="project-card">
  <div className="project-image">   
  <img src={spa} alt="Orchid Bloom Spa Website" />
  </div>

  <div className="project-content">
    <h3 className="project-title">Orchid Bloom Spa Website</h3>
    <p className="project-description">
      Designed and developed a multi-page website for a fictional spa and wellness center. 
      The site includes a home page, detailed services (massage therapy, facials, steam & sauna), 
      appointment booking, customer support, and legal/policy pages.
    </p>



    <div className="tech-stack">
      <span className="tech-tag">HTML5</span>
      <span className="tech-tag">CSS3</span>
      <span className="tech-tag">JavaScript</span>
    </div>


  </div>
</div>


        </div>
      </div>


{/* Projects from Database - visible to USER and ADMIN */}
{(isUser || isAdmin) && (
  <div className="database-projects-section">

    <h2 className="db-title">Projects from Database</h2>

    {/* ADMIN ONLY: Add New Project */}
    {isAdmin && (
      <button 
        className="add-project-btn"
        onClick={() => navigate("/admin/projects/new")}
      >
        + Add New Project
      </button>
    )}

    {/* List all DB projects */}
    <div className="db-projects-list">
      {projects.length === 0 && <p>No projects in database yet.</p>}

      {projects.map((p) => (
        <div key={p._id} className="db-project-card">
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <small>Tech: {p.technologies}</small>

          {p.link && (
      <a 
        href={p.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="view-project-link"
      >
        View Project
      </a>
    )}

          {/* ADMIN ONLY: Edit & Delete */}
          {isAdmin && (
            <div className="db-controls">
              <button 
                className="edit-btn"
                onClick={() => navigate(`/admin/projects/edit/${p._id}`)}
              >
                Edit
              </button>

              <button 
                className="delete-btn"
                onClick={() => handleDelete(p._id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)}


    </section>
  );
}
