import React from 'react';

const ClaimButton = ({ onClick, claimedPoints }) => {
  return (
    <div>
      <button onClick={onClick}>Claim Points</button>
      {claimedPoints !== null && <p>Points Claimed: {claimedPoints}</p>}
    </div>
  );
};

export default ClaimButton;
