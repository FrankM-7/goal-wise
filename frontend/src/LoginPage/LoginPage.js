import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './LoginPage.css';

export default function BasicGrid() {
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