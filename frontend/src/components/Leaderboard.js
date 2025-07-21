import React from 'react';
import './UI/Leaderboard.css';

const Leaderboard = ({ users }) => {
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  const getTrophy = (rank) => {
    switch (rank) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return '';
    }
  };

  return (
    <div className="leaderboard-glass">
      <h3>🏆 Leaderboard</h3>
      <ol>
        {sortedUsers.map((user, index) => (
          <li key={user._id} className={index < 3 ? 'top-user' : ''}>
            <strong>{getTrophy(index + 1)} {user.name}</strong>: {user.points} points (Rank #{index + 1})
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
