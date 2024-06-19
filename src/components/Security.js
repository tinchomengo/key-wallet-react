import React, { useState } from "react";
import "../styles/Security.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DotContainer = ({ activeIndex, totalSlides }) => {
  return (
    <div className="dot-container-center">
      <div className="dot-container">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

const Security = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    console.log(index + 1);
  };

  return (
    <div>
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
      <div className="carousel-container">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false} // Hide the dots
          infiniteLoop={true}
          useKeyboardArrows={true}
          autoPlay={true}
          interval={5000}
          onChange={handleSlideChange} // Log the active slide number
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow arrow-prev"
              >
                <img
                  src="static/images/Security/arrow-left.png"
                  alt="Previous"
                />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow arrow-next"
              >
                <img src="static/images/Security/arrow-right.png" alt="Next" />
              </button>
            )
          }
        >
          <div className="carousel-slide">
            <img
              src="static/images/Security/carousel1.png"
              alt="Carousel Item 1"
              className="carousel-image"
            />
            <div className="carousel-caption">
              <h3>Advanced Encryption Technology</h3>
              <h4>Secure Encryption</h4>
              <p>
                Key Wallet utilizes state-of-the-art encryption technologies to
                protect all data transmissions between devices and servers. This
                includes employing secure sockets layer (SSL) and transport
                layer security (TLS) protocols, ensuring that all sensitive
                information is kept private and secure from interception.
              </p>
            </div>
          </div>
          <div className="carousel-slide">
            <img
              src="static/images/Security/carouselmini.png"
              alt="Carousel Item 2"
              className="carousel-image"
            />
            <div className="carousel-caption-double">
              <h3>Real-Time Protection</h3>
              <h4>Continuous Security Monitoring</h4>
              <p>
                Secure Encryption: Key Wallet utilizes state-of-the-art
                encryption technologies to protect all data transmissions
                between devices and servers. This includes employing secure
                sockets layer (SSL) and transport layer security (TLS)
                protocols, ensuring that all sensitive information is kept
                private and secure from interception.
              </p>
              <h4>Regular Security Audits</h4>
              <p>
                To maintain the highest security standards, Key Wallet undergoes
                frequent audits conducted by leading independent security firms.
                These comprehensive reviews ensure that all aspects of our
                security measures are up-to-date and effective against the
                latest cybersecurity threats.
              </p>
            </div>
          </div>
          <div className="carousel-slide">
            <img
              src="static/images/Security/carousel3.png"
              alt="Carousel Item 3"
              className="carousel-image"
            />
            <div className="carousel-caption">
              <h3>Multi-Factor Authentication</h3>
              <h4>Layered Access Controls</h4>

              <p>
                Secure Encryption: Key Wallet utilizes state-of-the-art
                encryption technologies to protect all data transmissions
                between devices and servers. This includes employing secure
                sockets layer (SSL) and transport layer security (TLS)
                protocols, ensuring that all sensitive information is kept
                private and secure from interception.
              </p>
            </div>
          </div>
          <div className="carousel-slide">
            <img
              src="static/images/Security/carousel4.png"
              alt="Carousel Item 3"
              className="carousel-image"
            />
            <div className="carousel-caption">
              <h3>Biometric Security Features</h3>
              <h4>Biometric Verification</h4>
              <p>
                Users can enhance their security settings by enabling biometric
                authentication methods such as fingerprint scanning or facial
                recognition. This feature adds a personal layer of security,
                making it nearly impossible for unauthorized users to access
                your account.
              </p>
            </div>
          </div>
          <div className="carousel-slide">
            <img
              src="static/images/Security/carousel5.png"
              alt="Carousel Item 2"
              className="carousel-image"
            />
            <div className="carousel-caption-double-2">
              <h3>Compliance and Certifications</h3>
              <h4>Regulatory Compliance</h4>
              <p>
                Key Wallet adheres to strict regulatory standards designed to
                protect users and their assets. Compliance with international
                financial regulations, including anti-money laundering (AML) and
                know-your-customer (KYC) practices, reinforces our commitment to
                security and transparency.
              </p>
              <h4>Certified Security Practices</h4>
              <p>
                Our security protocols are certified by recognized global
                standards, ensuring that Key Wallet meets rigorous international
                security specifications and best practices.
              </p>
            </div>
          </div>
          <div className="carousel-slide">
            <img
              src="static/images/Security/carousel6.png"
              alt="Carousel Item 3"
              className="carousel-image"
            />
            <div className="carousel-caption">
              <h3>Security Education for Users</h3>
              <h4>Proactive User Guidance</h4>
              <p>
                Key Wallet believes in empowering users with the knowledge to
                protect their accounts. Our platform provides detailed security
                tips, guides on recognizing phishing attempts, and best
                practices for digital asset management to enhance user awareness
                and safety.
              </p>
            </div>
          </div>
          <div className="carousel-slide">
            <img
              src="static/images/Security/carousel7.png"
              alt="Carousel Item 3"
              className="carousel-image"
            />
            <div className="carousel-caption">
              <h3>Optimal Security for Digital Asset Management</h3>
              <p>
                Key Wallet is dedicated to providing a secure environment where
                you can confidently manage your digital assets. With
                industry-leading security measures and a commitment to
                continuous improvement, Key Wallet ensures that your digital
                finances are protected in a rapidly evolving digital world.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      <DotContainer activeIndex={activeIndex} totalSlides={7} />
    </div>
  );
};

export default Security;
