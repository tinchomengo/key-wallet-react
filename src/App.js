import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";
import Assets from "./components/Assets";
import Navigate from "./components/Navigate";
import Vision from "./components/Vision";
import Security from "./components/Security";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeItem, setActiveItem] = useState(0); // Start with the first tab
  const navigate = useNavigate();
  const routes = [
    "/",
    "/assets",
    "/navigate",
    "/vision",
    "/security",
    "/contact",
  ];

  const rootRef = useRef(null);

  const [touchStartX, setTouchStartX] = useState(null);
  const [isSlidingActive, setIsSlidingActive] = useState(false);

  // Set the active tab based on the current URL path on load
  useEffect(() => {
    const initialIndex = routes.findIndex(
      (route) => route === window.location.pathname
    );
    setActiveItem(initialIndex !== -1 ? initialIndex : 0);
  }, [routes]);

  useEffect(() => {
    // Scroll to the top of the page when activeItem changes
    rootRef.current.scrollTop = 0;
  }, [activeItem]);

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
    setIsSlidingActive(true);
  };

  const handleTouchEnd = (event) => {
    if (!isSlidingActive || touchStartX === null) return;
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    const sensitivity = 50; // Minimum pixel distance for a swipe
    if (deltaX > sensitivity) {
      handleNext();
    } else if (deltaX < -sensitivity) {
      handlePrev();
    }

    setTouchStartX(null);
    setIsSlidingActive(false);
  };

  const handleNext = () => {
    const newIndex = (activeItem + 1) % routes.length;
    navigate(routes[newIndex]);
    setActiveItem(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (activeItem - 1 + routes.length) % routes.length;
    navigate(routes[newIndex]);
    setActiveItem(newIndex);
  };

  useEffect(() => {
    const rootElement = rootRef.current;
    if (!rootElement) return;

    // Add event listeners for touch events
    rootElement.addEventListener("touchstart", handleTouchStart);
    rootElement.addEventListener("touchend", handleTouchEnd);

    return () => {
      // Clean up event listeners
      rootElement.removeEventListener("touchstart", handleTouchStart);
      rootElement.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartX, activeItem]);

  return (
    <div ref={rootRef} className="app-content">
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/assets" element={<Assets />} />
        <Route path="/navigate" element={<Navigate />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/security" element={<Security />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
