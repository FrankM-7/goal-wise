import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Menu from '../Menu/Menu';
import "./Homepage.css";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Today from '../Today/Today';

function Homepage () {
    const [task, setTask] = useState('');

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }

    function addTask() {
        axios.post('/api/addtask', { task: task })
        .then((response) => {
            // Handle the response from the backend
            if (response.data === 'unsuccess') {
                alert('Task failed, please try again');
            } else {
                alert('Task added successfully');
            }
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
        });
    }

    return (        
    <div className='Homepage'>
        <div className="InsideContainer">
            <Menu />
            <Today />
        </div>
        {/* // <div>
        // <h1>Task List</h1>
        // <input type="text" id="task" value={task} onChange={handleTaskChange} />
        // <button onClick={addTask}>Add Task</button>
        
        // </div> */}
    </div>
    );
}

export default Homepage;