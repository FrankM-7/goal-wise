import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Authentication.css';
import google from './google.png';
import axios from 'axios';
import { useState } from 'react';
import Switch from './Swtich/Swtich';
import { useEffect } from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default function Authentication( { onLogin, onSignUp } ) {
  const [selectedTab, setSelectedTab] = useState('Sign In'); // Add this state

  function renderForm() {
    if (selectedTab === 'Sign In') {
      return <Login onLogin={onLogin} />;
    } else if (selectedTab === 'Sign Up') {
      return <SignUp onSignUp={onSignUp} />;
    }
  }

  return (
    <Grid className='loginBackground' sx={{height: window.innerHeight}}>
      <Grid className='welcomeBackground'>
        <p className="welcomeBack">
            Welcome Back!
        </p>
        <Switch selectedTab={selectedTab}  onSelectTab={setSelectedTab} />        
        
        {renderForm()}

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