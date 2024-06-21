import React, { useState, useEffect } from "react";
import "../styles/Distinction.css";

const Distinction = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="distinction-main-wrapper">
      <div className="distinction-page">
        <div className="distinction-content">
          <h1>Advanced Security Meets</h1>
          <h1>User-Friendly Management</h1>
          <p>
            Key Wallet combines top-tier security protocols and a seamless user
            interface to redefine digital currency management. Users will
            experience the ultimate in protection and ease of use, tailored for
            everyone from beginners to expert traders.
          </p>
        </div>
      </div>
      <div className="distinction-subsections">
        {isMobile ? (
          <>
            <div className="distinction-section">
              <div className="distinction-text-content">
                <h2>Empowering Secure</h2>
                <h2>Transactions in the Digital Age</h2>
                <div className="distinction-image-content">
                  <img
                    src="static/images/Distinction/section1_sub1.png"
                    alt="Section 1"
                  />
                </div>
                <p>
                  At Key Wallet, we are dedicated to providing a safe,
                  transparent, and streamlined platform for managing digital
                  currencies. As part of the AIX Exchange Family, we leverage
                  deep industry expertise to offer a wallet that not only meets
                  but exceeds the standards of digital asset management.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="distinction-section">
              <div className="distinction-text-content">
                <h2>Empowering Secure Transactions</h2>
                <h2> in the Digital Age</h2>
                <p>
                  At Key Wallet, we are dedicated to providing a safe,
                  transparent, and streamlined platform for managing digital
                  currencies. As part of the AIX Exchange Family, we leverage
                  deep industry expertise to offer a wallet that not only meets
                  but exceeds the standards of digital asset management.
                </p>
              </div>
              <div className="distinction-image-content">
                <img
                  src="static/images/Distinction/section1_sub1.png"
                  alt="Section 2"
                />
              </div>
            </div>
          </>
        )}

        {isMobile ? (
          <>
            <div className="distinction-section">
              <div className="distinction-text-content">
                <h2>Commitment to Security</h2>
                <h2>and Compliance</h2>
                <div className="distinction-image-content">
                  <img
                    src="static/images/Distinction/section1_sub2.png"
                    alt="Section 1"
                  />
                </div>
                <p>
                  Security is not just a feature at Key Wallet; it is the
                  foundation of our platform. With rigorous compliance to
                  international security standards, we ensure that every
                  transaction is protected through state-of-the-art encryption
                  and continuous system monitoring. Our compliance with global
                  financial regulations ensures that your investments are always
                  secure and that our operations adhere to the highest levels of
                  legal scrutiny.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="distinction-section">
              <div className="distinction-text-content">
                <h2>Commitment to Security</h2>
                <h2>and Compliance</h2>
                <p>
                  Security is not just a feature at Key Wallet; it is the
                  foundation of our platform. With rigorous compliance to
                  international security standards, we ensure that every
                  transaction is protected through state-of-the-art encryption
                  and continuous system monitoring. Our compliance with global
                  financial regulations ensures that your investments are always
                  secure and that our operations adhere to the highest levels of
                  legal scrutiny.
                </p>
              </div>
              <div className="distinction-image-content">
                <img
                  src="static/images/Distinction/section1_sub2.png"
                  alt="Section 2"
                />
              </div>
            </div>
          </>
        )}

        {isMobile ? (
          <>
            <div className="distinction-section">
              <div className="distinction-text-content">
                <h2>Designed for Accessibility </h2>
                <h2>and Ease of Use</h2>
                <div className="distinction-image-content">
                  <img
                    src="static/images/Distinction/section1_sub3.png"
                    alt="Section 1"
                  />
                </div>
                <p>
                  Key Wallet is crafted to make digital finance easy for
                  everyone—from blockchain beginners to experienced traders. Our
                  interface is designed to be intuitive, ensuring that managing
                  digital assets is straightforward and hassle-free. Whether you
                  are investing in ERC20 or TRC20 tokens, our wallet provides
                  all the tools you need to engage with the digital economy
                  effectively and safely.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="distinction-section">
              <div className="distinction-text-content">
                <h2>Designed for Accessibility </h2>
                <h2>and Ease of Use</h2>
                <p>
                  Key Wallet is crafted to make digital finance easy for
                  everyone—from blockchain beginners to experienced traders. Our
                  interface is designed to be intuitive, ensuring that managing
                  digital assets is straightforward and hassle-free. Whether you
                  are investing in ERC20 or TRC20 tokens, our wallet provides
                  all the tools you need to engage with the digital economy
                  effectively and safely.
                </p>
              </div>
              <div className="distinction-image-content">
                <img
                  src="static/images/Distinction/section1_sub3.png"
                  alt="Section 2"
                />
              </div>
            </div>
          </>
        )}

        {isMobile ? (
          <>
            <div className="distinction-section">
              <div className="distinction-text-content">
                <h2>Commitment to Security</h2>
                <h2>and Compliance</h2>
                <div className="distinction-image-content">
                  <img
                    src="static/images/Distinction/section1_sub4.png"
                    alt="Section 1"
                  />
                </div>
                <p>
                  Our position within the AIX Exchange allows us to stay at the
                  forefront of technological advancements. By continuously
                  integrating innovative solutions, we ensure that Key Wallet
                  remains a leading choice for users seeking reliable and
                  advanced digital asset management. We are committed to
                  evolving with the blockchain landscape to provide cutting-edge
                  features that enhance user experience and asset security.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="distinction-section">
              <div className="distinction-text-content">
                <h2>Commitment to Security</h2>
                <h2>and Compliance</h2>
                <p>
                  Our position within the AIX Exchange allows us to stay at the
                  forefront of technological advancements. By continuously
                  integrating innovative solutions, we ensure that Key Wallet
                  remains a leading choice for users seeking reliable and
                  advanced digital asset management. We are committed to
                  evolving with the blockchain landscape to provide cutting-edge
                  features that enhance user experience and asset security.
                </p>
              </div>
              <div className="distinction-image-content">
                <img
                  src="static/images/Distinction/section1_sub4.png"
                  alt="Section 2"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Distinction;
