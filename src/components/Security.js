import React, { useState, useEffect } from "react";
import "../styles/Security.css";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Security = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="security-main-wrapper">
      <div className="security-page">
        <div className="security-content">
          <h1>Ensuring the Safeguarding</h1>
          <h1>of your digital assets</h1>
          <p>
            At Key Wallet, the security of your digital assets and personal
            information is paramount. Our platform incorporates a robust suite
            of advanced security measures designed to provide the highest level
            of protection, giving users confidence and peace of mind while
            managing their digital currencies.
          </p>
        </div>
      </div>
      <div className="security-section">
        <h2>Ensuring the Safeguarding of</h2>
        <h2>your digital assets</h2>
        <p>
          Key Wallet is dedicated to providing a secure environment where you
          can confidently manage your digital assets. With industry-leading
          security measures and a commitment to continuous improvement, Key
          Wallet ensures that your digital finances are protected in a rapidly
          evolving digital world.
        </p>
      </div>
    </div>
  );
};

export default Security;
