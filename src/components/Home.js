import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
    <div className="home-main-wrapper">
      <div className="home-page">
        <div className="home-content">
          <h1>Welcome to</h1>
          <img
            src="static/images/Home/home-key-logo.png"
            className="home-key-logo"
            alt="Key Home Logo"
          />
          <h2>Crypto Security You Can Touch</h2>
          <h3>From Individual Swaps to Institutional Trust.</h3>
          <img
            src={`static/images/Home/${
              isMobile
                ? "scrolldown-indicator-logo-mobile.png"
                : "scrolldown-indicator-logo.png"
            }`}
            className="scrolldown-indicator-logo"
            alt="ScrolldownLogo"
          />
          <button className="home-btn-download" onClick={handleDownload}>
            Download App
          </button>
        </div>
      </div>

      {/* Explore the App Section */}
      <div class="explore-app-section">
        <h2>Explore the App</h2>
        <div class="app-image-grid">
          <div class="app-image">
            <img
              src="static/images/Home/app1.svg"
              alt="App Screen 1"
              onClick={() => openPopup("static/images/Home/app1.svg")} //Done
            />
          </div>
          <div class="app-image">
            <img
              src="static/images/Home/app3.svg"
              alt="App Screen 2"
              onClick={() => openPopup("static/images/Home/app3.svg")} //Done
            />
          </div>
          <div class="app-image">
            <img
              src="static/images/Home/app5.svg"
              alt="App Screen 3"
              onClick={() => openPopup("static/images/Home/app5.svg")} //Done
            />
          </div>
          <div class="app-image">
            <img
              src="static/images/Home/app2.svg"
              alt="App Screen 4"
              onClick={() => openPopup("static/images/Home/app2.svg")} //Done
            />
          </div>
          <div class="app-image-moved">
            <img
              src="static/images/Home/app4.svg"
              alt="App Screen 5"
              onClick={() => openPopup("static/images/Home/app4.svg")} //Done
            />
          </div>
          <div class="app-image-moved2">
            <img
              src="static/images/Home/app6.svg"
              alt="App Screen 6"
              onClick={() => openPopup("static/images/Home/app6.svg")} //Done
            />
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="image-popup">
          <span className="close-popup" onClick={closePopup}>
            &times;
          </span>
          <img
            src={selectedImage}
            alt="Zoomed Project"
            className="zoomed-image"
            style={{ transform: `scale(${zoomLevel})` }}
          />
          <div className="zoom-controls">
            <button onClick={zoomOut} className="zoom-button">
              -
            </button>
            <button onClick={zoomIn} className="zoom-button">
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
