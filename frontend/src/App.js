import React, { useEffect, useState } from 'react';
import LoginForm from './Authentication/Login';
import RegisterForm from './Authentication/Register';
import Homepage from './Homepage/Homepage';

import './App.css';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if user is logged in and set token
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);


  function handleLogin(token) {
    // Perform login logic
    setToken(token);
    localStorage.setItem('token', token);
  }

  function handleRegister() {
    // Perform registration logic
  }

  function handleLogout() {
    // Perform logout logic
    setToken(null);
    localStorage.removeItem('token');
    console.log('Logged out');
  }

  return (
    <div className="App">
      {!token ? (
        <div>
          <h2>Login</h2>
          <LoginForm onLogin={handleLogin} />
          <h2>Register</h2>
          <RegisterForm onRegister={handleRegister} />
        </div>
      ) : (
          <Homepage onLogout={handleLogout} />
      )} 
    </div>
  );
}

export default App;
