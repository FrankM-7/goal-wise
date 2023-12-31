import React, { useState } from 'react';
import axios from 'axios';

function SignUp({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform registration logic or send registration data to the backend

    axios
      .post('/register', { email: email, password: password })
      .then((response) => {
        // Handle the response from the backend
        if (response.data === 'unsuccess') {
          alert('Registration failed, please try again');
        } else {
          onRegister();
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });

    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;
