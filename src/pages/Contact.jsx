import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const navigate = useNavigate();
  
  // Form state management
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log form data (since backend isn't required to be fully functional)
    console.log("Contact Form Submitted:", formData);
    
    // Show success message (you can replace this with a proper notification)
    alert("Thank you for your message! I'll get back to you soon.");
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    
    // Redirect to home page as required by assignment
    navigate("/");
  };

  return (
<section className="contact" id="contact">
  <div className="contact-content">
    <div className="contact-container">
      {/* Left side: header + info */}
      <div className="contact-left">
        <div className="contact-header">
          <h1>
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="contact-subtitle">
            Ready to start a project or have questions? Let's connect!
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-panel">
            {/* Email */}
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>tawuti@my.centennialcollege.ca</p>
              </div>
            </div>
            {/* Phone */}
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>647-448-6987</p>
              </div>
            </div>
            {/* Location */}
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>Toronto, ON, Canada</p>
              </div>
            </div>
            {/* Currently */}
            <div className="info-item">
              <i className="fas fa-graduation-cap"></i>
              <div>
                <h4>Currently</h4>
                <p>
                  AI & Software Engineering Student <br /> Centennial College
                </p>
              </div>
            </div>
            {/* Social links */}
            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/tesneem-awut" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:tawuti@my.centennialcollege.ca">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-container">
              <h2>Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or question..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}