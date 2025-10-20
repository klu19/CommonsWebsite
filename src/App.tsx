import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage"
import Teampage from "./pages/Teampage"
import projectpage from "./pages/projectpage"
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Team" element={<Teampage />} />
            <Route path="/projects" element={<projectpage />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;