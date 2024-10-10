import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";
import Assets from "./components/Assets";
import Navigate from "./components/Navigate";
import Vision from "./components/Vision";
import Security from "./components/Security";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
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
    </Router>
  );
}

export default App;
