import React, { useState, useEffect } from "react";
import "../styles/Assets.css";

const Assets = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [expandedItem, setExpandedItem] = useState(null);

  const openPopup = (imageSrc) => {
    setSelectedImage(imageSrc);
    setZoomLevel(1);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Increase zoom level, max 3
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Decrease zoom level, min 1
  };

  const toggleExpand = (item) => {
    // Toggle expanded item
    setExpandedItem(expandedItem === item ? null : item);
  };

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
    <div className="assets-main-wrapper">
      <div className="assets-page">
        <div className="assets-content">
          <h1>Secure</h1>
          <h2>Your Digital Assets</h2>
          <h2>with Tangem Technology</h2>
          <p>
            Your private keys are safely stored on a physical card, making your
            assets immune to online hacks and unauthorized access.
          </p>
          <button className="btn-download" onClick={handleDownload}>
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assets;
