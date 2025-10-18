import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-title">
        <a href="/">The Commons Group</a> 
      </div>

      <h1 className="logo">My Portfolio</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Team">Our Team</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;