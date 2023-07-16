import "./Menu.css";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Add, HambergerMenu, SearchNormal1 } from 'iconsax-react';
import * as Icon from 'iconsax-react';
import { Divider } from '@mui/material';
import ListItem from '../ListItem/ListItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router'


const Tag = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    height: "auto",
    width: "auto",
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    padding: "6px 9px",
    margin: '4px 2px', // Add margin to the Tag component
}));

const TaskItem = ({ iconName, iconVariant, name, number, currentPick }) => {
    const IconComponent = Icon[iconName]; // Access the icon component dynamically
    const color = currentPick === "true" ? '#DFDFDF' : '#E8E8E8';
    const numberColor = currentPick === "true" ? '#EDEDED' : '#DFDFDF';
    const boldText = currentPick === "true" ? 'bold' : 'normal';
  return (
    <Paper elevation={0} style={{height: "36px", fontSize: "14px", backgroundColor: color }}>
        <Grid container spacing={0} alignItems="center" style={{ padding: '0px 15px', height: "100%"}}>
            <Grid item xs={2}>
                
                <IconComponent variant={iconVariant} color="#767676" />
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: '6px', fontWeight: boldText}}>
                {name}
            </Grid>
            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ width: "23px", height: "14px", marginLeft: 'auto', textAlign: 'center' }}>
                <Paper elevation={0} style={{ width: "100%", height: "100%" , fontSize: "10px", backgroundColor: numberColor}}>
                    {number}
                </Paper>
                </div>
            </Grid>
        </Grid>
    </Paper>
  );
};

function Menu( { onLogout } ) {
    const [listName, setListName] = useState("");
    const [lists, setLists] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/api/lists', {
            params: {
                token: localStorage.getItem('token')
            }
        })
            .then(res => {
                setLists(res.data.lists);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    function addList() {
        console.log("addList");
        // setLists([...lists,  <ListItem />]);
    }

    function handlePopupSubmit(event) {
        axios.post('/api/add/list', {
            name: listName, 
            token: localStorage.getItem('token')
        }).then(res => {
            console.log(res.data);
            // refresh
            navigate(0)
        }).catch(err => {
            console.log(err);
        })
        event.preventDefault();
    }

    return (
        <div className="Menu unselectable">
            
            <Grid container spacing={0}>
                <Grid item xs={6} style={{fontWeight: "medium", fontSize: "24px", marginTop: "10px"}} >
                    Menu
                </Grid>
                <Grid item xs={6} style={{display: 'flex', justifyContent: 'flex-end', marginTop: "10px"}}>
                    <HambergerMenu size="32" color="#767676" />
                </Grid>

                <Grid item xs={12} style={{ height: "36px", marginTop: "16px", marginBottom: "26px"}}>
                    <Paper
                        elevation={0}
                        style={{
                        height: "36px",
                        border: "2px #D5D5D5 solid",
                        backgroundColor: "#E8E8E8",
                        color: "#767676",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 10px", // Optional: Add some padding around the icon and text
                        }}
                    >
                        <SearchNormal1 size="20" color="#767676" />
                        <span style={{marginLeft: "25px"}}>Search</span>
                        
                    </Paper>
                </Grid>

                {/* TASKS */}
                <Grid item xs={12}>
                    <Grid container spacing={0}>
                        <p className="Title">TASKS</p> 
                        {/* One Task */}
                        <Grid item xs={12} style={{margin: "5px 0px 1px 0px"}}>
                            <TaskItem iconName="Forward" iconVariant="Bold" name="Upcoming" number="2" />
                        </Grid>

                        {/* One Task */}
                        <Grid item xs={12} style={{margin: "1px 0px"}}>
                            <TaskItem currentPick="true" iconName="Task" iconVariant="Bold" name="Today" number="4" />
                        </Grid>

                        {/* One Task */}
                        <Grid item xs={12} style={{margin: "1px 0px"}}>
                            <TaskItem iconName="Calendar" iconVariant="Bold" name="Calendar" number="8" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{margin: "10px 0px"}}>
                    <Divider variant="middle" />
                </Grid>

                {/* LISTS */}
                <Grid item xs={12}>
                    <Grid container spacing={0}>
                        <p className="Title">LISTS</p> 
                        {/* One Task */}
                        {lists.length > 0 ? (
                            lists.map((list) => <ListItem key={list.id} listName={list.title} />)
                        ) : (
                            <p>Loading lists...</p>
                        )}

                        {/* One Task */}
                        {/* <Grid item xs={12}>
                            <ListItem color="#61CEDC" name="Work" number="6" />
                        </Grid> */}

                        {/* One Task */}
                        {/* <Grid item xs={12}>
                            <ListItem color="#F2C938" name="List 1" number="2" />
                        </Grid> */}

                        {/* One Task */}
                        <Grid item xs={12}>
                            <Paper elevation={0} style={{height: "36px", fontSize: "14px", backgroundColor: '#E8E8E8' }}>
                                    <Popup trigger={
                                                    <Grid container spacing={0} alignItems="center" style={{ padding: '0px 15px', height: "100%"}}>
                                                        <Grid item xs={2}>
                                                            <Add />
                                                        </Grid>
                                                        <Grid item xs={6} style={{ paddingLeft: '6px' }}>
                                                            Add List
                                                        </Grid>
                                                    </Grid>
                                    } modal>
                                        <span> 
                                        <form onSubmit={handlePopupSubmit}>
                                            <input
                                                type="text"
                                                value={listName}
                                                onChange={(e) => setListName(e.target.value)}
                                                placeholder="Enter list name"
                                            />
                                            <button type="submit">Add List</button>
                                            </form>
                                        </span>
                                    </Popup>
                                    
                            </Paper>
                        </Grid>

                    </Grid>
                </Grid>

                {/* TAGS */}
                <Grid item xs={12}>
                    <Grid container spacing={0}>
                        <p className="Title">TAGS</p>
                        <Grid item xs={12} style={{ marginTop: "6px" }}>
                            <div style={{ display: "flex", fontSize: "10px"}}>
                                <Tag elevation={0} style={{backgroundColor: "#C6DEE1"}}>Square</Tag>
                                <Tag elevation={0} style={{backgroundColor: "#F2CFCF"}}>Name</Tag>
                                <Tag elevation={0} style={{backgroundColor: "#DFDFDF"}}>+ Add Tag</Tag>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <input type="button" value="Sign Out" className="AddTaskButton" onClick={onLogout} />
            </Grid>
        </div>
    );
};

export default Menu;