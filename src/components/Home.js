import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    beforeChange: (oldIndex, newIndex) => handleSlideChange(newIndex),
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
            <img src="static/images/Home/app1.svg" alt="App Screen 1" />
          </div>
          <div className="app-image tall">
            <img src="static/images/Home/app3.svg" alt="App Screen 2" />
          </div>
          <div className="app-image">
            <img src="static/images/Home/app5.svg" alt="App Screen 3" />
          </div>
          <div className="app-image">
            <img src="static/images/Home/app2.svg" alt="App Screen 4" />
          </div>
          <div className="app-image app-moved">
            <img src="static/images/Home/app4.svg" alt="App Screen 5" />
          </div>
          <div className="app-image app-moved2">
            <img src="static/images/Home/app6.svg" alt="App Screen 6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
