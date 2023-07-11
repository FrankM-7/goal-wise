import React from 'react';
import Menu from '../Menu/Menu';
import "./Homepage.css";
import Today from '../Today/Today';

function Homepage ( {onLogout} ) {
    return (        
    <div className='Homepage'>
        <div className="InsideContainer">
            <Menu onLogout={ onLogout } />
            <Today />
        </div>
    </div>
    );
}

export default Homepage;