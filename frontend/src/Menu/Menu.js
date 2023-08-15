import "./Menu.css";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Add, HambergerMenu, SearchNormal1, Logout } from 'iconsax-react';
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

const TaskItem = ({ iconName, iconVariant, name, number, isSelected, type, onSelect, id}) => {
    const IconComponent = Icon[iconName]; // Access the icon component dynamically
    const color = isSelected === true ? '#DFDFDF' : '#E8E8E8';
    const numberColor = isSelected === true ? '#EDEDED' : '#DFDFDF';
    const boldText = isSelected === true ? 'bold' : 'normal';
    const navigate = useNavigate();

    function navigation() {
        console.log(id);
        onSelect(id); // Notify the parent component of the selection
        navigate(`/${type}`);
    }

  return (
    <Paper elevation={0} className="taskArea" style={{ backgroundColor: color }} onClick={navigation}>
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
    const [selectedItemId, setSelectedItemId] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        // check from the link if there is a list id
        const listId = window.location.href.split('/').pop();
        const type = window.location.href.split('/')[3];
        if (type === 'list') {
            setSelectedItemId(listId);
        } else if (type === 'home') {
            setSelectedItemId(-1);
        } else if (type === 'today') {
            setSelectedItemId(-2);
        } else if (type === 'calendar') {
            setSelectedItemId(-3);
        }
            
        axios.get('/api/lists', {
            params: {
                token: localStorage.getItem('token')
            }
        })
            .then(res => {
                setLists(res.data.lists);
                console.log(res.data.lists)
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

    function onSelect(id) {
        setSelectedItemId(id);
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
                            <TaskItem iconName="Forward" iconVariant="Bold" name="Upcoming" number="2" isSelected={selectedItemId == -1} type={"upcoming"} onSelect={onSelect} id={-1} />
                        </Grid>

                        {/* One Task */}
                        <Grid item xs={12} className="taskMenuMargin">
                            <TaskItem currentPick="true" iconName="Task" iconVariant="Bold" name="Today" number="4" isSelected={selectedItemId == -2} type={"today"} onSelect={onSelect} id={-2} />
                        </Grid>

                        {/* One Task */}
                        <Grid item xs={12} className="taskMenuMargin">
                            <TaskItem iconName="Calendar" iconVariant="Bold" name="Calendar" number="8" isSelected={selectedItemId == -3} type={"calendar"} onSelect={onSelect} id={-3} />
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
                                lists.map((list) => <ListItem key={list.id} listName={list.title} id={list.id} onSelect={onSelect} isSelected={list.id == selectedItemId} />)
                            ) : ( 
                                <p>Loading lists...</p>
                            )}
                        </Grid>                 
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

                
            </Grid> {/*move this becasue of asher*/}
            <Grid onClick={onLogout} className="signOut" style = {{display: "flex", alignItems: "center", padding: "0px 15px"}}>
                <Logout size="32" color="#FF2400" style={{marginRight: "11px"}}/>
                <span style={{fontWeight: "bold", fontSize: "14px"}}>Logout</span>
            </Grid>
        </div>
    );
};

export default Menu;