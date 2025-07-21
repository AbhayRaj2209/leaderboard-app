import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ users }) => {
  if (!users.length) return null;

  const sortedUsers = [...users].sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <div className="leaderboard-section">
      <h2>🏆 Live Ranking</h2>

      <div className="top-three-wrapper">
        {sortedUsers.slice(0, 3).map((user, index) => (
          <div className={`rank-card rank-${index + 1}`} key={user._id}>
            <div className="crown">👑</div>
            <div className="profile-circle">{user.name[0]}</div>
            <div className="user-name">{user.name}</div>
            <div className="user-points">{user.totalPoints} pts</div>
            <div className="user-rank">Rank #{index + 1}</div>
          </div>
        ))}
      </div>

      <ul className="remaining-users">
        {sortedUsers.slice(3).map((user, idx) => (
          <li key={user._id} className="user-row">
            <span className="user-rank-text">#{idx + 4}</span>
            <span className="user-name-text">{user.name}</span>
            <span className="user-point-text">{user.totalPoints} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
