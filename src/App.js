import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";
import Distinction from "./components/Distinction";
import Focus from "./components/Focus";
import Security from "./components/Security";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/distinction" element={<Distinction />} />
          <Route path="/focus" element={<Focus />} />
          <Route path="/security" element={<Security />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
