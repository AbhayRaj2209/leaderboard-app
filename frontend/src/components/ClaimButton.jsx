// src/components/ClaimButton.jsx
import React from 'react';

const ClaimButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="claim-button">
      Claim Points
    </button>
  );
};

export default ClaimButton;
