import { Link } from "react-router-dom";
import logoIcon from "../assets/logoIcon.png"; // Adjust the path as needed

export default function Layout() {
  return (
    <header>
      <nav>
        {/* Logo on the left */}
        <div className="logo">
          <img src={logoIcon} alt="Tesneem Logo" />
          
        </div>

        {/* Navigation links on the right */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/education">Education</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
