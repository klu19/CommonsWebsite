import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage"
import Teampage from "./pages/Teampage"
import Projectpage from "./pages/Projectpage"
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Team" element={<Teampage />} />
            <Route path="/Projects" element={<Projectpage />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;