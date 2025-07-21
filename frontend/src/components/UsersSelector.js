import React, { useState } from 'react';

const UsersSelector = ({ users, selectedUser, onUserSelect, onAddUser }) => {
  const [newUserName, setNewUserName] = useState('');

  const handleAddUser = () => {
    if (newUserName.trim()) {
      onAddUser(newUserName.trim());
      setNewUserName('');
    }
  };

  return (
    <div className="card-box" style={{ marginBottom: '20px' }}>
      <h3>Select User</h3>
      
      <select
        value={selectedUser || ''}
        onChange={(e) => onUserSelect(e.target.value)}
        className="dropdown"
      >
        <option value="">-- Select a User --</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Enter new user name"
          className="input-box"
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default UsersSelector;
