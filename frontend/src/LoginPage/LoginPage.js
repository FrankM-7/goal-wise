import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export default function BasicGrid() {
  const imageUrl = 'https://theplace2b.com.au/wp-content/uploads/2020/09/178-1783296_g-transparent-circle-google-logo.png';
  const welcomeHeight = window.innerHeight;
  const welcomeWidth = window.innerWidth * 0.6;
  let innerWidth = welcomeWidth * 0.65;
  let innerHeight = welcomeHeight * 0.85;
  let welcomePx = innerWidth * 0.1
  if (innerWidth/innerHeight > 0.72) {
    innerWidth = innerHeight * 0.72;
    welcomePx = welcomePx * 0.64;
  }
  let buttonWidth = welcomePx * 6.9
  return (
    <Grid sx={{ // background 
      width: welcomeWidth, 
      height: welcomeHeight,
      backgroundColor: '#07092A',
      position: 'absolute',
      right: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Grid sx={{ // welcome background
        width: innerWidth,
        height: innerHeight,
        backgroundColor: '#F0EBDC',
        margin: "auto",
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <p style={{ 
          textAlign: 'center',
          color: '##F0EBDC',
          fontWeight: '600',
          fontSize: welcomePx,
          }}>
            Welcome Back!
        </p>
        <Grid sx={{ // slide bar
        display: 'flex',
        width: buttonWidth,
        backgroundColor: '#07092A',
        borderRadius: '12px',
        margin: '0px 0px 0px 0px',
        padding: '1px',
        alignItems: 'center'
        }}>
          <Button variant="contained" disableElevation sx={{ // login button 
            backgroundColor: 'white',
            color: 'black',
            height: 34,
            width: buttonWidth/2,
            height: buttonWidth/6 - 2,
            margin: '0',
            borderRadius: '12px',
            
            textTransform: 'none'

          }}>
            Login
          </Button>
          <Button variant="contained" disableElevation sx={{ // reigster button 
            backgroundColor: '#07092A',
            color: '#F0EBDC',
            width: buttonWidth/2,
            height: buttonWidth/6,
            borderRadius: '12px',
            textTransform: 'none'
          }}>
            Register
          </Button>
        </Grid>
        <Grid sx={{ // text boxes grid
          width: buttonWidth,
          backgroundColor: '#F0EBDC',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',         
        }}>
          <p style={{ // email
            color: '##F0EBDC',
            fontWeight: '600',
            
          }}>
            email
          </p>
          <TextField id="outlined-basic" label="Email address" variant="outlined" sx={{ // email text box
              backgroundColor: 'white',
              //height: 34,
              width: buttonWidth,
              //height: buttonWidth,
              margin: '0',
              borderRadius: '12px',
              outline: 'none',
              "& fieldset": { border: 'none' },
          }}>

          </TextField>
          <p style={{ // password
            color: '##F0EBDC',
            fontWeight: '600',
            
          }}>
            password
          </p>
          <TextField id="outlined-basic" label="Password" variant="outlined" sx={{// password text box
              backgroundColor: 'white',
              //height: 34,
              width: buttonWidth,
              //height: buttonWidth,
              margin: '0',
              borderRadius: '12px',
              outline: 'none',
              "& fieldset": { border: 'none' },
          }}>

          </TextField>

          
        </Grid>
        <Grid sx={{ // sign in and google
          width: buttonWidth,
          backgroundColor: '#F0EBDC',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <p></p>
          <Button variant="contained" disableElevation sx={{ // sign in button
            backgroundColor: '#07092A',
            color: '#F0EBDC',
            height: 34,
            width: buttonWidth/2,
            height: buttonWidth/6,
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'none'

          }}>
            Sign In
          </Button>
          <p></p>
          <p style={{ 
            color: '##F0EBDC',
            fontWeight: '600',
            fontSize: 10
            
          }}>
            Or Continue With
          </p>
          <img src={imageUrl} style={{ // google logo
            width: '40px'
          }} />
        </Grid>
      </Grid>

    </Grid>
  );
}