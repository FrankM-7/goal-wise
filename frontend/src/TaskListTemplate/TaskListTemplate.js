import "./TaskListTemplate.css";
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
  minWidth: '60px',
  marginLeft: "35px",
  backgroundColor: 'rgba(0,0,0,0.0)',
  border: "2px black solid",
  borderRadius: "10px",
}));

function TaskListTemplate({type, listName, id}) {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [pageName, setPageName] = useState("");

  useEffect(() => {   
    if (type === "today") {
        setPageName("Today");
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
    }
  }, []);

  useEffect(() => {
    if (type === "list") {
        axios.get('/api/list_info', {
            params: {
                token: localStorage.getItem('token'),
                list_id: id
            }
        }).then((response) => {
            // Handle the response from the backend
            setTasks(response.data.tasks);
            // console.log(response.data);
        }).catch((error) => {
            // Handle any errors
            console.error(error);
        });

        setPageName(id);
    }
  }, [id]);

  function addTask() {
    setShowPopup(true);
  }

  function handlePopupSubmit(event) {
    event.preventDefault();
    if (type == "today") {
        axios.post('/tasks/add', {
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
    } else if (type == "list") {
        axios.post('/tasks/add/list', {
            task: taskName,
            completed: false,
            date: new Date(),
            list_id: id,
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
  }

  return (
    <div className="sectionToday" style={{width:window.innerWidth - 340}}>
      <Grid container spacing={0}>
        <Grid item xs={12} className="headerToday">
          <Paper elevation={0} className="textToday" style={{ backgroundColor: "rgba(255,0,0,0)"}}>{pageName}</Paper>
          <TaskNumber elevation={0}>8</TaskNumber>
        </Grid>
        <Grid className="unselectable taskMargin" item xs={12}>
          <Paper onClick={addTask} elevation={0} className="newTask" style={{  backgroundColor: "rgba(0, 0, 0, 0)" }}>+ Add New Task</Paper>
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
        <div className="taskMenu" >
          <Grid item xs={12}>
            {tasks.length > 0 ? (
              tasks.map((task) => <Task key={task.id} task={task.title} />)
            ) : (
              <p>Loading tasks...</p>
            )}
          </Grid>
        </div> 
      </Grid>
    </div>
  );
}

export default TaskListTemplate;
