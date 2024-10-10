import React, { useState } from "react";
import "../styles/Vision.css";

const Vision = () => {
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
    <div className="vision-main-wrapper">
      <div className="vision-page">
        <div className="vision-content">
          <h1>Onboarding</h1>
          <h2>Businesses and</h2>
          <h2>Institutions</h2>
          <p>
            Our Maker-Checker system provides businesses and institutions with
            advanced security and accountability offering features beyond
            standard consumer wallets.
          </p>
          <button className="btn-download" onClick={handleDownload}>
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vision;
