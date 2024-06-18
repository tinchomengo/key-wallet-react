import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
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
  );
};

export default Navbar;
