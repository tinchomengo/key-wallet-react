import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../styles/CustomNavbar.css";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  const navigate = useNavigate(); // Use navigate inside this component
  const location = useLocation(); // Use location to track URL changes

  const [activeDot, setActiveDot] = useState(location.pathname); // Initialize with current URL

  const handleDotClick = (path) => {
    setActiveDot(path); // Update active dot when clicked
    navigate(path); // Navigate to the corresponding path
  };

  // Use effect to update activeDot when the URL changes
  useEffect(() => {
    setActiveDot(location.pathname); // Sync the activeDot with the current URL
  }, [location.pathname]);

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
      <div className="mobile-navbar">
        <BootstrapNavbar collapseOnSelect expand="lg" variant="dark">
          <BootstrapNavbar.Brand href="#home">
            <div className="logo">
              <img
                src="static/images/logo.png"
                alt="Key Wallet Logo"
                className="logo-image"
              />
            </div>
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BootstrapNavbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/assets">Assets</Nav.Link>
              <Nav.Link href="/navigate">Navigate</Nav.Link>
              <Nav.Link href="/vision">Vision</Nav.Link>
              <Nav.Link href="/security">Security</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
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
