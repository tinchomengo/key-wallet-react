import React, { useState } from "react";
import "../styles/Security.css";

const Security = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    let downloadLink;

    if (/android/.test(userAgent)) {
      downloadLink =
        "https://play.google.com/store/apps/details?id=com.ai_alpha_mobile_app&pcampaignid=web_share";
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      downloadLink = "https://apps.apple.com/us/app/ai-alpha/id6473463625";
    } else {
      alert(
        "Device not supported. Download the app from App Store or Play Store."
      );
      return;
    }

    const anchor = document.createElement("a");
    anchor.href = downloadLink;
    anchor.target = "_blank";
    anchor.click();
  };

  return (
    <div className="security-main-wrapper">
      <div className="security-page">
        <div className="security-content">
          <h1>Security</h1>
          <h2>is the Core of Key</h2>
          <h2>Wallet's Infrastructure</h2>
          <p>We take every measure to protect your assets and information</p>
          <img
            src="static/images/Home/scrolldown-indicator-logo.png"
            className="scrolldown-indicator-logo"
            alt="Scrolldown Logo"
          />
          <button className="btn-download" onClick={handleDownload}>
            Download App
          </button>
        </div>
      </div>

      {/* Safety First Section */}
      <div className="safety-section">
        <h2>Safety First</h2>
        <div className="safety-feature-grid">
          <div className="safety-feature">
            <img
              src="static/images/Security/one.png"
              alt="Extensive Security Audits"
            />
            <h3>Extensive Security Audits</h3>
            <p>
              Key Wallet undergoes security audits to ensure the integrity and
              safety of the platform.
            </p>
          </div>
          <div className="safety-feature">
            <img
              src="static/images/Security/two.png"
              alt="Layered Security Approach"
            />
            <h3>Layered Security Approach</h3>
            <p>
              Combining centralized controls with decentralized accessibility
              ensures your assets are always protected, whether they are on our
              platform or transitioning across different blockchain ecosystems.
            </p>
          </div>
        </div>
      </div>
      {/* Digital Security Assurance Section */}
      <div className="digital-security-section">
        <div className="digital-security-content">
          <img
            src="static/images/Security/three.png"
            alt="Digital Security Illustration"
            className="digital-security-image"
          />
          <p className="digital-security-text">
            With Key Wallet, you can rest assured that your digital assets are
            secure, giving you the peace of mind to manage your investments
            confidently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;
