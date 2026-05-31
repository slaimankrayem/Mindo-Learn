import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand">
        <img src="/e6ce2c8e-4b3e-4b0b-a8a2-71befb3c8ea4.jpeg" alt="MindoLearn icon" />
        MindoLearn
      </Link>

      <div className="navbar-search">
        <input type="text" placeholder="🔍 Search for courses..." />
      </div>

      <div className="navbar-profile">
        <img src="/360_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.webp" alt="Profile" />
        Rubio
      </div>

      <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/help">Help Center</Link>
      </div>

      <div className="rightSide">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/help">Help Center</Link>
      </div>
    </div>
  );
};

export default NavBar;
