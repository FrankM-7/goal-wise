import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './LoginPage.css';
import Switch from '@mui/material/Switch';
import google from './google.png'

export default function Login() {
  return (
    <Grid className='loginBackground' sx={{height: window.innerHeight}}>
      <Grid className='welcomeBackground'>
        <p className="welcomeBack">
            Welcome Back!
        </p>
        <Switch
          className='loginSwitch'
          disableRipple
        ></Switch>
        <Grid className='credentialTexts'>
          <p className='credentialFont'>
            email
          </p>
          <TextField id="outlined-basic" label="Email address" variant="outlined" className='credentialBoxes'>
          </TextField>
          <p className='credentialFont'>
            password
          </p>
          <TextField id="outlined-basic" label="Password" variant="outlined" className='credentialBoxes'>
          </TextField>
        </Grid>
        <Grid className='signInArea'>
          <p></p>
          <Button variant="contained" disableElevation className='signInButton'>
            Sign In
          </Button>
          <p></p>
        </Grid>
        <Grid className='continueArea'>
          <div className="line"></div>
          <p className='continueWith'>Or</p>
          <div className="line"></div>
        </Grid>
        <Button variant="contained" disableElevation className='googleBar'>
          <img src={google} className='googleLogo'/>
          Sign in with Google
        </Button>
      </Grid>
    </Grid>
  );
}