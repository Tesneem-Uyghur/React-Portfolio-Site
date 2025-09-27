import "./Services.css";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      description: "Full-stack web application development using modern technologies like React, Node.js, and Python. From concept to deployment with responsive design.",
      features: [
        "Responsive Web Design",
        "React & JavaScript Development", 
        "Backend API Development",
        "Database Integration"
      ]
    },
    {
      id: 2,
      icon: "🔍",
      title: "Quality Assurance & Testing",
      description: "Comprehensive testing services including manual and automated testing. ISTQB-certified with expertise in test strategy and framework development.",
      features: [
        "Test Automation Framework",
        "Manual & Automated Testing",
        "CI/CD Integration",
        "Performance Testing"
      ]
    },
    {
      id: 3,
      icon: "📱",
      title: "Software Development",
      description: "Custom software solutions using Java, Python, and C#. Focus on clean, maintainable code with robust architecture and thorough testing.",
      features: [
        "Desktop Applications",
        "API Development",
        "Database Design",
        "Code Review & Optimization"
      ]
    },  
  ];

  return (
    <section className="services" id="services">
      <div className="services-content">
        <div className="services-header">
          <h1>
            <span className="gradient-text">My Services</span>
          </h1>
          <p className="services-subtitle">
            Comprehensive development and quality assurance solutions
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}