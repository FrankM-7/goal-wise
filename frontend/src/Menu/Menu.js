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
    <Paper elevation={0} className="taskArea" style={{ backgroundColor: color }}>
        <Grid container spacing={0} className="taskItem" >
            <Grid item xs={2}>
                <IconComponent variant={iconVariant} color="#767676" />
            </Grid>
            <Grid item xs={6} className="taskNames" style={{ fontWeight: boldText}}>
                {name}
            </Grid>
            <Grid item xs={4} className="numberArea">
                <div className="numberBox">
                <Paper elevation={0} className="taskNumbers" style={{ backgroundColor: numberColor}}>
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
            console.log(res.data);
            navigate(0);
        }).catch(err => {
            console.log(err);
        })
        event.preventDefault();
    }

    return (
        <div className="Menu unselectable" >
            
            <Grid container spacing={0} className="menuGrid">
                <Grid item xs={6} className="menuHeader">
                    Menu
                </Grid>
                <Grid item xs={6} className="hamberger">
                    <HambergerMenu size="32" color="#767676" />
                </Grid>

                <Grid item xs={12} className="searchGrid">
                    <Paper elevation={0} className="searchBox">
                        <SearchNormal1 size="20" color="#767676" />
                        <span style={{marginLeft: "25px"}}>Search</span>
                        
                    </Paper>
                </Grid>

                {/* TASKS */}
                <Grid item xs={12}>
                    <Grid container spacing={0}>
                        <p className="Title">TASKS</p> 
                        {/* One Task */}
                        <Grid item xs={12} className="taskMenuMargin" >
                            <TaskItem iconName="Forward" iconVariant="Bold" name="Upcoming" number="2" />
                        </Grid>

                        {/* One Task */}
                        <Grid item xs={12} className="taskMenuMargin">
                            <TaskItem currentPick="true" iconName="Task" iconVariant="Bold" name="Today" number="4" />
                        </Grid>

                        {/* One Task */}
                        <Grid item xs={12} className="taskMenuMargin">
                            <TaskItem iconName="Calendar" iconVariant="Bold" name="Calendar" number="8" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{margin: "10px 0px"}}>
                    <Divider variant="middle" />
                </Grid>

                {/* LISTS */}
                <Grid item xs={12} className="listMenu" >
                    <Grid container spacing={0}>
                        <p className="Title">LISTS</p> 
                        <br/>
                        {/* One Task */}
                        <Grid className="listScrollArea" container>
                            {lists.length > 0 ? (
                                lists.map((list) => <ListItem key={list.id} listName={list.title}/>)
                            ) : (
                                <p>Loading lists...</p>
                            )}
                        </Grid>

                        {/* One Task */}
                        {/* <Grid item xs={12}>
                            <ListItem color="#61CEDC" name="Work" number="6" />
                        </Grid> */}

                        {/* One Task */}
                        {/* <Grid item xs={12}>
                            <ListItem color="#F2C938" name="List 1" number="2" />
                        </Grid> */}

                        {/* One Task */}
                        
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} className="addListArea">
                        <Popup trigger={
                            <Grid container spacing={0} alignItems="center" className="addListGrid" >
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

                {/* TAGS */}
                <Grid item xs={12}>
                    <Grid container spacing={0}>
                        <p className="Title">TAGS</p>
                        <Grid item xs={12} style={{ marginBottom: "6px"}}>
                            <div style={{ display: "flex", fontSize: "10px"}}>
                                <Tag elevation={0} style={{backgroundColor: "#C6DEE1"}}>Square</Tag>
                                <Tag elevation={0} style={{backgroundColor: "#F2CFCF"}}>Name</Tag>
                                <Tag elevation={0} style={{backgroundColor: "#DFDFDF"}}>+ Add Tag</Tag>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                
            </Grid>
            <Grid className="signOut">
                <input type="button" value="Sign Out"  onClick={onLogout} />
            </Grid>
        </div>
    );
};

export default Menu;