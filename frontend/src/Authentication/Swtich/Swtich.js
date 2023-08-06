import React from 'react';
import Grid from '@mui/material/Grid';

function Switch({ selectedTab, onSelectTab }) {

    const handleTabClick = (tab) => {
        onSelectTab(tab);
    };

    return (
        <div style={{ width: '100%', borderRadius: '10px', backgroundColor: 'green' }}>
            <Grid container style={{ height: '50px' }}>
                <Grid
                    item
                    xs={6}
                    onClick={() => handleTabClick('Sign In')}
                    style={{
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: '5px',
                        backgroundColor: selectedTab === 'Sign In' ? 'black' : 'white',
                    }}
                >
                    Sign In
                </Grid>
                <Grid
                    item
                    xs={6}
                    onClick={() => handleTabClick('Sign Up')}
                    style={{
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: '5px',
                        backgroundColor: selectedTab === 'Sign Up' ? 'black' : 'white',
                    }}
                >
                    Sign Up
                </Grid>
            </Grid>
        </div>
    );
}

export default Switch;
