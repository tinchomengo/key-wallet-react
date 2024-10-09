import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";
import Assets from "./components/Assets";
import Navigate from "./components/Navigate";
import Security from "./components/Security";
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
          <Route path="/security" element={<Security />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
