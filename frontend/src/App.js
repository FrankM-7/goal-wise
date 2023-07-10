import React, { useState } from 'react';
import LoginForm from './Authentication/Login';
import RegisterForm from './Authentication/Register';
import Homepage from './Homepage/Homepage';

import './App.css';

function App() {
  // TODO: This is just a placeholder for now
  const [loggedIn, setLoggedIn] = useState(true);

  function handleLogin() {
    // Perform login logic
    setLoggedIn(true);
  }

  function handleRegister() {
    // Perform registration logic
    setLoggedIn(true);
  }

  return (
    <div className="App">
      {/* {!loggedIn ? (
        <div>
          <h2>Login</h2>
          <LoginForm onLogin={handleLogin} />
          <h2>Register</h2>
          <RegisterForm onRegister={handleRegister} />
        </div>
      ) : ( */}
          <Homepage />
      {/* )} */}
    </div>
  );
}

export default App;
