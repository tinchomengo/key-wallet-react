import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../styles/CustomNavbar.css";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDot, setActiveDot] = useState("/");

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Disable scrolling when the menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Update active dot when URL changes
  useEffect(() => {
    setActiveDot(location.pathname);
  }, [location.pathname]);

  const handleDotClick = (path) => {
    setActiveDot(path);
    navigate(path);
  };

  // Clean up: Ensure that body scrolling is enabled when component is unmounted
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="navbar desktop-navbar">
        <div className="logo">
          <a
            href="https://keywallet.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="static/images/logo.png"
              alt="Key Wallet Logo"
              className="logo-image"
            />
          </a>
        </div>

        <div className="nav-links">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/assets" activeClassName="active">
            Assets
          </NavLink>
          <NavLink to="/navigate" activeClassName="active">
            Navigate
          </NavLink>
          <NavLink to="/vision" activeClassName="active">
            Vision
          </NavLink>
          <NavLink to="/security" activeClassName="active">
            Security
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </div>

        <div className="social-icons">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img
              src="static/images/Home/x-logo.png"
              alt="X Logo"
              className="social-logo"
            />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="static/images/Home/tiktok-logo.png"
              alt="TikTok Logo"
              className="social-logo"
            />
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <nav className="mobile-navbar">
        <div className="navbar-logo">
          <a href="https://keywallet.co" rel="noopener noreferrer">
            <img src="static/images/logo.png" alt="Logo" />
          </a>
        </div>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => toggleMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              onClick={() => toggleMenu()}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/assets"
              onClick={() => toggleMenu()}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Assets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/navigate"
              onClick={() => toggleMenu()}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Navigate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vision"
              onClick={() => toggleMenu()}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Vision
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/security"
              onClick={() => toggleMenu()}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Security
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => toggleMenu()}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
          <div className="social-icons">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img
                src="static/images/Home/x-logo.png"
                alt="X Logo"
                className="social-logo"
              />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="static/images/Home/tiktok-logo.png"
                alt="TikTok Logo"
                className="social-logo"
              />
            </a>
          </div>
          <li></li>
        </ul>
      </nav>

      <div className="left-arrow arrow">
        <img
          src="static/images/arrow-left.png"
          style={{ opacity: activeDot === "/" ? 0.2 : 1 }}
          alt="Previous"
        />
      </div>
      <div className="right-arrow arrow">
        <img
          src="static/images/arrow-right.png"
          style={{ opacity: activeDot === "/contact" ? 0.2 : 1 }}
          alt="Next"
        />
      </div>

      {/* Dot Container */}
      <div className="dot-container">
        <div
          className={`dot ${activeDot === "/" ? "active-dot" : "inactive-dot"}`}
          onClick={() => handleDotClick("/")}
        ></div>
        <div
          className={`dot ${
            activeDot === "/assets" ? "active-dot" : "inactive-dot"
          }`}
          onClick={() => handleDotClick("/assets")}
        ></div>
        <div
          className={`dot ${
            activeDot === "/navigate" ? "active-dot" : "inactive-dot"
          }`}
          onClick={() => handleDotClick("/navigate")}
        ></div>
        <div
          className={`dot ${
            activeDot === "/vision" ? "active-dot" : "inactive-dot"
          }`}
          onClick={() => handleDotClick("/vision")}
        ></div>
        <div
          className={`dot ${
            activeDot === "/security" ? "active-dot" : "inactive-dot"
          }`}
          onClick={() => handleDotClick("/security")}
        ></div>
        <div
          className={`dot ${
            activeDot === "/contact" ? "active-dot" : "inactive-dot"
          }`}
          onClick={() => handleDotClick("/contact")}
        ></div>
      </div>
    </div>
  );
};

export default CustomNavbar;
