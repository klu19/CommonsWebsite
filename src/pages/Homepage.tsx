import React from "react";
import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import skyline from "../assets/baltimoreskyline.jpg"; 



import "./Homepage.css";

function Homepage() {
  return (
    <>
      <Hero />
      <Aboutus />
    </>
  );
}

export default Homepage;