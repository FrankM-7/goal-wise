import "./Today.css";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Task from '../Tasks/Task';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const TaskNumber = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: '60px',
  width: '60px',
  marginLeft: "35px",
  backgroundColor: 'rgba(0,0,0,0.0)',
  border: "2px black solid",
  borderRadius: "10px",
}));

function Today() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {    
    // get tasks
    axios.get('/api/gettasks', {
      params: {
        token: localStorage.getItem('token')
      }
    }).then((response) => {
      // Handle the response from the backend
      setTasks(response.data.tasks);
    }).catch((error) => {
      // Handle any errors
      console.error(error);
    });
  
  }, []);

  function addTask() {
    setShowPopup(true);
  }

  function handlePopupSubmit(event) {
    event.preventDefault();

    axios
      .post('/tasks/add', {
        task: taskName,
        completed: false,
        date: new Date(),
        priority: 0,
        category: "None",
        subtasks: [],
        token: localStorage.getItem('token')
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          // Update the tasks array with the new task
          setTasks([...tasks, response.data]);
        }
        setTaskName('');
        setShowPopup(false);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="Today">
      <Grid container spacing={0}>
        <Grid item xs={12} style={{ display: "flex", fontWeight: "500", fontSize: "48px" }}>
          <Paper elevation={0} style={{ backgroundColor: "rgba(0,0,0,0)", display: "flex", alignItems: "center" }}>Today</Paper>
          <TaskNumber elevation={0}>8</TaskNumber>
        </Grid>
        <Grid className="unselectable" item xs={12} style={{ marginTop: "30px", marginLeft: "15px", display: "flex", cursor: "pointer" }}>
          <Paper onClick={addTask} elevation={0} style={{ border: "2px #DFDFDF solid", fontSize: "18px", backgroundColor: "rgba(0, 0, 0, 0)", padding: "21px 25px", width: "100%" }}>+ Add New Task</Paper>
        </Grid>

        {showPopup && (
          <div className="popup">
            <form onSubmit={handlePopupSubmit}>
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task name"
              />
              <button type="submit">Add Task</button>
            </form>
          </div>
        )}

        <Grid item xs={12}>
          {tasks.length > 0 ? (
            tasks.map((task) => <Task key={task.id} task={task.title} />)
          ) : (
            <p>Loading tasks...</p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Today;
