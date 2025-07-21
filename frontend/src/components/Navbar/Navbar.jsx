import React from 'react';
import './Navbar.css'; // optional styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🔥 Leaderboard</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#leaderboard">Leaderboard</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
