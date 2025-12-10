import { useState, useEffect } from "react";
import { getAllProjects, deleteProject } from "../../api/projectService";
import { isAuthenticated } from "../../auth/auth-helper";
import { useNavigate } from "react-router-dom";
import "./AdminProjects.css";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const auth = isAuthenticated();
  const navigate = useNavigate();

  // Only Admin can access this page
  useEffect(() => {
    if (!auth || auth.user.role !== "Admin") {
      navigate("/signin");
      return;
    }
    getAllProjects().then(setProjects);
  }, []);

  const handleDelete = id => {
    if (confirm("Are you sure you want to delete this project?")) {
      deleteProject(id).then(() => {
        alert("Project deleted!");
        getAllProjects().then(setProjects);
      });
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin – Manage Projects</h1>

      {/* Button to Add New Project */}
      <button 
        className="add-project-btn"
        onClick={() => navigate("/admin/projects/new")}
      >
        + Add New Project
      </button>

      {/* Display Projects */}
      <div className="admin-list">
        {projects.length === 0 && <p>No projects in database yet.</p>}
        
        {projects.map(p => (
          <div key={p._id} className="admin-project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <small>Tech: {p.technologies}</small>
            {p.link && <a href={p.link} target="_blank">View Project</a>}
            
            <div className="admin-controls">
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
          </div>
        ))}
      </div>
    </div>
  );
}