import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './LoginPage.css';
import axios from 'axios';
import { useState } from 'react';

export default function BasicGrid( { onLogin } ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create an object with the email and password data
    const data = {
      email: email,
      password: password
    };

    // Make a POST request to your backend endpoint using Axios
    axios.post('/login', data)
      .then(response => {
        // Handle the response from the backend if needed
        console.log(response.data);
        // set the token in localStorage
        localStorage.setItem('token', response.data.token);
        // reload window

        onLogin(response.data.token);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };


  const imageUrl = 'https://theplace2b.com.au/wp-content/uploads/2020/09/178-1783296_g-transparent-circle-google-logo.png';
  return (
    <Grid className='loginBackground' >
      <Grid className='welcomeBackground'>
        <p className="welcomeBack">
            Welcome Back!
        </p>
        <Grid className='loginSlideBar'>
          <Button className='loginSlideLogin' variant="contained" disableElevation>
            Login
          </Button>
          <Button className='loginSlideRegister' variant="contained" disableElevation>
            Register
          </Button>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid className='credentialTexts'>
              <p className='credentialFont'>
                email
              </p>
              <TextField id="outlined-basic" label="Email address" variant="outlined" className='credentialBoxes' value={email} onChange={(e) => setEmail(e.target.value)} />
              <p className='credentialFont'>
                password
              </p>
              <TextField id="outlined-basic" label="Password" variant="outlined" className='credentialBoxes' value={password} onChange={(e) => setPassword(e.target.value)} />
          </Grid>
          <Grid className='signInArea'>
            <p></p>
            <Button variant="contained" disableElevation className='signInButton' type='submit'>
              Sign In
            </Button>
            <p></p>
          </Grid>
        </form>
        <Grid className='continueArea'>
          <div className="line"></div>
          <p className='continueWith'>
            Or Continue With
          </p>
          <div className="line"></div>
        </Grid>
        <img src={imageUrl} className='googleLogo'/>
      </Grid>

    </Grid>
  );
}