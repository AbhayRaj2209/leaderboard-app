import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import './components/styles/common.css';
import './components/UI/Leaderboard.css';

import Header from './components/UI/Header';
import HomeSection from './components/UI/HomeSection';
import UsersSelector from './components/UsersSelector';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import AboutSection from './components/UI/AboutSection';
import ContactSection from './components/UI/ContactSection';
import Footer  from './components/UI/Footer';
function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [claimedPoints, setClaimedPoints] = useState(null);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add new user
  const handleAddUser = async (name) => {
    try {
      await axios.post('http://localhost:5000/api/users', { name });
      fetchUsers();
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  // Select user from dropdown
  const handleUserSelect = (userId) => {
    setSelectedUser(userId);
  };

  // Claim random points
  const handleClaimPoints = async () => {
    if (!selectedUser) return alert("Please select a user!");
    try {
      const res = await axios.post('http://localhost:5000/api/users/claim', {
        userId: selectedUser,
      });
      setClaimedPoints(res.data.points);
      fetchUsers();
    } catch (err) {
      console.error("Error claiming points:", err);
    }
  };

  return (
    <div className="main-container">
       <Navbar />
      <Header />

      <section id="home" className="section">
        <HomeSection />
      </section>

      <section id="leaderboard" className="section">
        <UsersSelector
          users={users}
          selectedUser={selectedUser}
          onUserSelect={handleUserSelect}
          onAddUser={handleAddUser}
        />
        <ClaimButton onClick={handleClaimPoints} claimedPoints={claimedPoints} />
        <Leaderboard users={users} />
      </section>

      <section id="about" className="section">
        <AboutSection />
      </section>

      <section id="contact" className="section">
        <ContactSection />
      </section>

   <Footer />

    </div>
  );
}

export default App;
