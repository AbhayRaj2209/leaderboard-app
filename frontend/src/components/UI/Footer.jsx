import React from 'react';
import './Footer.css'; // optional styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Leaderboard App. All rights reserved.</p>
      <p>
        Built by <strong>Abhay Raj</strong> 🚀 | <a href="mailto:admin@leaderboardapp.com">Contact Us</a>
      </p>
    </footer>
  );
};

export default Footer;
