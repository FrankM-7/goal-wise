import React, { useEffect, useState } from 'react';
import Homepage from './Homepage/Homepage';
import LoginPage from './LoginPage/LoginPage';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in and set token
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      navigate('/home'); // Redirect to homepage after token is found
    } else {
      navigate('/'); // Redirect to login page if no token is found
    }
  }, [navigate]);

  function handleLogin(token) {
    // Perform login logic
    setToken(token);
    localStorage.setItem('token', token);
    navigate('/home'); // Redirect to homepage after successful login
  }

  function handleRegister() {
    // Perform registration logic
  }

  function handleLogout() {
    // Perform logout logic
    setToken(null);
    localStorage.removeItem('token');
    console.log('Logged out');
    navigate('/'); // Redirect to login page after logout
  }

  return (
    <Routes>
      <Route exact path="/" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/home" element={<Homepage onLogout={ handleLogout } />} />
    </Routes>
  );
}

export default App;
