import React, { useState } from "react";
import "../styles/Navigate.css";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Navigate = () => {
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
    <div className="navigate-main-wrapper">
      <div className="navigate-page">
        <div className="navigate-content">
          <h2>Your Path to Secure</h2>
          <h2>Asset Management is</h2>
          <h1>Simple</h1>
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

      {/* Security and Speed Section */}
      <div className="security-speed-section">
        <h2>Security and Speed</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Quick and Easy Onboarding</h3>
            <br></br>
            <img src="static/images/Navigate/one.png" alt="Quick Onboarding" />
            <p>
              Register and set up your Key Wallet on either iOS and Android.
            </p>
          </div>
          <div className="feature-card">
            <h3>Activate Tangem Card for Maximum Protection</h3>

            <img src="static/images/Navigate/two.png" alt="Activate Tangem" />
            <p>
              All transactions require card authorization, ensuring only you
              have access and control over your funds.
            </p>
          </div>
          <div className="feature-card">
            <h3>
              Cross-Chain<br></br> Swaps
            </h3>
            <br></br>
            <img
              src="static/images/Navigate/three.png"
              alt="Cross-Chain Swaps"
            />
            <p>
              Easily swap and manage assets across different blockchain
              ecosystems. No need for multiple wallets; enjoy a unified
              experience.
            </p>
          </div>
          <div className="feature-card">
            <h3>Effortless and Secure Withdrawals</h3>

            <img
              src="static/images/Navigate/four.png"
              alt="Effortless Withdrawals"
            />
            <p>
              Withdraw your digital earnings easily to your preferred wallets or
              bank accounts with minimal fees and a streamlined process,
              ensuring a hassle-free experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigate;
