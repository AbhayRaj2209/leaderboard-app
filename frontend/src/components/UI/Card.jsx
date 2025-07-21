import React from 'react';
import './UI.css';

const Card = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
