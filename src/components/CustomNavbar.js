import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/CustomNavbar.css";
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  return (
    <div>
      {/* Desktop Navbar */}
      <div className="navbar desktop-navbar">
        <div className="logo">
          <img
            src="static/images/logo.png"
            alt="Key Wallet Logo"
            className="logo-image"
          />
        </div>
        <div className="nav-links">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/distinction" activeClassName="active">
            Distinction
          </NavLink>
          <NavLink to="/focus" activeClassName="active">
            Focus
          </NavLink>
          <NavLink to="/security" activeClassName="active">
            Security
          </NavLink>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mobile-navbar">
        <BootstrapNavbar collapseOnSelect expand="lg" variant="dark">
          <BootstrapNavbar.Brand href="#home">
            {" "}
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
              <Nav.Link href="/distinction">Distinction</Nav.Link>
              <Nav.Link href="/focus">Focus</Nav.Link>
              <Nav.Link href="/security">Security</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
      </div>
    </div>
  );
};
export default CustomNavbar;
