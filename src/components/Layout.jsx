import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logoIcon from "../assets/logoIcon.png";
import { isAuthenticated, clearJWT } from "../auth/auth-helper";
import { signout } from "../api/authService";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [adminDropdown, setAdminDropdown] = useState(false);
  const navigate = useNavigate();

  const auth = isAuthenticated();
  const isAdmin = auth && auth.user.role === "Admin";

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSignout = () => {
    signout().then(() => {
      clearJWT(() => navigate("/signin"));
    });
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logoIcon} alt="Tesneem Logo" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Admin Dropdown Menu */}
          {isAdmin && (
            <div 
              className="admin-dropdown"
              onMouseEnter={() => setAdminDropdown(true)}
              onMouseLeave={() => setAdminDropdown(false)}
            >
              <button className="admin-dropdown-btn">
                Admin ▼
              </button>
              {adminDropdown && (
                <div className="admin-dropdown-content">
                  <Link to="/admin/projects" onClick={() => setIsOpen(false)}>Manage Projects</Link>
                  <Link to="/admin/contacts" onClick={() => setIsOpen(false)}>Manage Contacts</Link>
                </div>
              )}
            </div>
          )}

          {!auth && (
            <>
              <Link to="/signin" onClick={() => setIsOpen(false)}>Sign In</Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </>
          )}

          {auth && (
            <>
              <span className="welcome-text">Hi, {auth.user.name}</span>
              <button 
                onClick={() => { setIsOpen(false); handleSignout(); }}
                className="signout-btn"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}