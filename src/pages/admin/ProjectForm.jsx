import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addProject, getProjectById, updateProject } from "../../api/projectService";
import { isAuthenticated } from "../../auth/auth-helper";
import "./AdminProjects.css";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    link: ""
  });

  const auth = isAuthenticated();
  const navigate = useNavigate();
  const { id } = useParams(); // For edit mode

  // Only Admin can access
  useEffect(() => {
    if (!auth || auth.user.role !== "Admin") {
      navigate("/signin");
      return;
    }

    // If editing, fetch the project data
    if (id) {
      getProjectById(id).then(project => {
        setFormData({
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          link: project.link
        });
      });
    }
  }, [id]);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    
    const saveAction = id 
      ? updateProject(id, formData)  // Update existing
      : addProject(formData);         // Add new

    saveAction.then(() => {
      alert(id ? "Project updated!" : "Project added!");
      navigate("/admin/projects");
    });
  };

  return (
    <div className="admin-page">
      <h1>{id ? "Edit Project" : "Add New Project"}</h1>

      <form onSubmit={handleSubmit} className="admin-form">
        <input 
          name="title" 
          placeholder="Project Title" 
          value={formData.title} 
          onChange={handleChange} 
          required 
        />
        
        <textarea 
          name="description" 
          placeholder="Project Description" 
          value={formData.description} 
          onChange={handleChange} 
          required 
          rows="5"
        />
        
        <input 
          name="technologies" 
          placeholder="Technologies (e.g., React, Node.js, MongoDB)" 
          value={formData.technologies} 
          onChange={handleChange} 
        />
        
        <input 
          name="link" 
          placeholder="Project Link (optional)" 
          value={formData.link} 
          onChange={handleChange} 
        />

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            {id ? "Update Project" : "Add Project"}
          </button>
          <button 
            type="button" 
            className="cancel-btn"
            onClick={() => navigate("/admin/projects")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}