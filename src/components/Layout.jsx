import { Link } from "react-router-dom";
import { useState } from "react";
import logoIcon from "../assets/logoIcon.png"; // Adjust the path as needed

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="navbar">
        {/* Logo on the left */}
        <div className="logo">
          <img src={logoIcon} alt="Tesneem Logo" />
        </div>

        {/* Hamburger menu (mobile) */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}
