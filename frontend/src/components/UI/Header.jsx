import React from 'react';
import './UI.css';

<nav>
  <a href="#home">Home</a>
  <a href="#leaderboard">Leaderboard</a>
  <a href="#about">About Us</a>
  <a href="#contact">Contact</a>
</nav>


const Header = () => {
  return (
    <div className="app-header">
      <h1>🔥 Leaderboard System</h1>
      <p>Claim points & climb the leaderboard</p>
    </div>
  );
};

export default Header;
