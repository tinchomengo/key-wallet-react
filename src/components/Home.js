import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
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

  return (
    <div className="home-main-wrapper">
      <div className="home-page">
        <div className="home-content">
          <h1>Connect</h1>
          <h1>with Confidence</h1>
          <p>
            Key Wallet empowers you to navigate the digital currency space with
            confidence. Secure, smart, and incredibly straightforward, Key
            Wallet is more than just a wallet—it's your partner in the digital
            age.
          </p>
        </div>
      </div>

      {/* Explore the App Section */}
      <div className="explore-app-section">
        <h2>Explore the App</h2>
        <div className="app-image-grid">
          <div className="app-image">
            <img
              src="static/images/Home/app1.svg"
              alt="App Screen 1"
              onClick={() => openPopup("static/images/Home/app1.svg")}
            />
          </div>
          <div className="app-image tall">
            <img
              src="static/images/Home/app3.svg"
              alt="App Screen 2"
              onClick={() => openPopup("static/images/Home/app3.svg")}
            />
          </div>
          <div className="app-image">
            <img
              src="static/images/Home/app5.svg"
              alt="App Screen 3"
              onClick={() => openPopup("static/images/Home/app5.svg")}
            />
          </div>
          <div className="app-image">
            <img
              src="static/images/Home/app2.svg"
              alt="App Screen 4"
              onClick={() => openPopup("static/images/Home/app2.svg")}
            />
          </div>
          <div className="app-moved">
            <img
              src="static/images/Home/app4.svg"
              alt="App Screen 5"
              onClick={() => openPopup("static/images/Home/app4.svg")}
            />
          </div>
          <div className="app-moved2">
            <img
              src="static/images/Home/app6.svg"
              alt="App Screen 6"
              onClick={() => openPopup("static/images/Home/app6.svg")}
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
