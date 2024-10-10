import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-main-wrapper">
      <div className="contact-page">
        <h1>Contact Us</h1>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
            </div>
            <div className="input-group message-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn-send-message">
              Send Message
            </button>
          </form>
          <div className="corner-decor top-left"></div>
          <div className="corner-decor top-right"></div>
          <div className="corner-decor bottom-left"></div>
          <div className="corner-decor bottom-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
