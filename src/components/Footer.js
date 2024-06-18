import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img
          src="static/images/footer-logo.png"
          alt="Key Wallet Logo"
          className="footer-logo"
        />{" "}
      </div>
      <div className="footer-middle">
        <div className="footer-menu">
          <h3>Menu</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/distinction">Distinction</a>
            </li>
            <li>
              <a href="/focus">Focus</a>
            </li>
            <li>
              <a href="/security">Security</a>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          <h3>Info</h3>
          <ul>
            <li>
              <a href="/terms">Terms and Conditions</a>
            </li>
            <li>
              <a href="/legal">Legal</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {" "}
          Scroll to Top{" "}
          <img
            src="static/images/arrow.png"
            alt="Scroll to top"
            className="arrow-icon"
          />
        </button>
        <p className="footer-powered-by">Powered by Novatide</p>
      </div>
    </footer>
  );
};

export default Footer;
