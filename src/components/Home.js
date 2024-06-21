import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Footer from "./Footer";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeDotContainer = ({ activeIndex, totalSlides }) => {
  return (
    <div className="home-dot-container-center">
      <div className="home-dot-container">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`home-dot ${
              index === activeIndex ? "home-activeSlide" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

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
      <div className="features-section">
        <h2>Key Wallet:</h2>
        <h2>Your secure gateway to digital assets</h2>
        <div className="features-grid">
          <div className="feature">
            <img
              src="static/images/Home/section1_sub1.png"
              alt="Feature 1"
              className="feature-image"
            />
            <div className="feature-text">
              <h3>Secure, Simple, and Smart</h3>
              <p>
                Designed for safety and engineered for ease, Key Wallet offers
                the most streamlined access to managing ERC20 and TRC20 tokens.
              </p>
            </div>
          </div>
          <div className="feature">
            <img
              src="static/images/Home/section1_sub2.png"
              alt="Feature 2"
              className="feature-image"
            />
            <div className="feature-text">
              <h3>Top-Tier Security</h3>
              <p>
                Built on a foundation of stringent security protocols, Key
                Wallet ensures that your digital assets are protected with
                advanced encryption and continuous monitoring systems.
              </p>
            </div>
          </div>
          <div className="feature">
            <img
              src="static/images/Home/section1_sub3.png"
              alt="Feature 3"
              className="feature-image"
            />
            <div className="feature-text">
              <h3>User-Friendly Experience</h3>
              <p>
                Whether you're a beginner or a seasoned crypto enthusiast, our
                intuitive interface makes managing digital currencies effortless
                and efficient.
              </p>
            </div>
          </div>
          <div className="feature">
            <img
              src="static/images/Home/section1_sub4.png"
              alt="Feature 4"
              className="feature-image"
            />
            <div className="feature-text">
              <h3>Direct Blockchain Access</h3>
              <p>
                Engage with blockchain technologies directly with no
                intermediaries, offering you full control of your digital
                transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="digital-assets-section">
        <h2>Seamless Management</h2>
        <h2>of Digital Assets</h2>
        <img
          src="static/images/Home/section2_sub1.png"
          alt="Digital Assets"
          className="digital-assets-image"
        />
        <div className="carousel-container">
          <Slider {...settings}>
            <div className="slide-content">
              <h4>Effortless Transactions </h4>
              <p>
                Buy, store, exchange, and manage your ERC20 and TRC20 tokens all
                from one place.
              </p>
            </div>
            <div className="slide-content">
              <h4>Real-Time Updates </h4>
              <p>
                Stay ahead with real-time balance updates and transaction
                notifications.
              </p>
            </div>
            <div className="slide-content">
              <h4>Global Accessibility</h4>
              <p>
                Access your digital wallet anywhere, anytime, on any device.
              </p>
            </div>
          </Slider>
          <HomeDotContainer activeIndex={activeIndex} totalSlides={3} />
        </div>
      </div>
      <div className="trustedby-section">
        <h2>Trusted by Experts,</h2>
        <h2>Designed for Everyone</h2>
        <div className="trustedby-grid">
          <div className="trustedby-feature">
            <img
              src="static/images/Home/section3_sub1.png"
              alt="Trusted by 1"
              className="trustedby-image"
            />
            <h3>Regulatory Compliant</h3>
            <p>
              Key Wallet adheres to the highest standards of compliance,
              ensuring your wallet meets global regulatory requirements.
            </p>
          </div>
          <div className="trustedby-feature">
            <img
              src="static/images/Home/section3_sub2.png"
              alt="Trusted by 2"
              className="trustedby-image"
            />
            <h3> Continuous Innovation</h3>
            <p>
              Key Wallet is at the forefront of integrating cutting-edge
              blockchain solutions, ensuring you always have access to the best
              tools in the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
