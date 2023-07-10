import "./Menu.css";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Add, HambergerMenu, SearchNormal1 } from 'iconsax-react';
import * as Icon from 'iconsax-react';
import { Divider } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
    const color = currentPick == "true" ? '#DFDFDF' : '#E8E8E8';
    const numberColor = currentPick == "true" ? '#EDEDED' : '#DFDFDF';
    const boldText = currentPick == "true" ? 'bold' : 'normal';
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

const ListItem = ({ color, name, number, currentPick }) => {
    const BGcolor = currentPick == "true" ? '#DFDFDF' : '#E8E8E8';
    const numberColor = currentPick == "true" ? '#EDEDED' : '#DFDFDF';
    const boldText = currentPick == "true" ? 'bold' : 'normal';
    const iconColor = color;
  return (
    <Paper elevation={0} style={{height: "36px", fontSize: "14px", backgroundColor: BGcolor }}>
        <Grid container spacing={0} alignItems="center" style={{ padding: '0px 15px', height: "100%"}}>
            <Grid item xs={2}>
                <Paper elevation={0} style={{backgroundColor: iconColor, height: "17px", width: "17px", marginLeft: "4px"}} />
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
  

function Menu() {
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
                        <p1 className="Title">TASKS</p1> 
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
                        <p1 className="Title">LISTS</p1> 
                        {/* One Task */}
                        <Grid item xs={12}>
                            <ListItem color="#F26666" name="Personal" number="2" />
                        </Grid>

                        {/* One Task */}
                        <Grid item xs={12}>
                            <ListItem color="#61CEDC" name="Work" number="6" />
                        </Grid>

                        {/* One Task */}
                        <Grid item xs={12}>
                            <ListItem color="#F2C938" name="List 1" number="2" />
                        </Grid>

                        {/* One Task */}
                        <Grid item xs={12}>
                            <Paper elevation={0} style={{height: "36px", fontSize: "14px", backgroundColor: '#E8E8E8' }}>
                                <Grid container spacing={0} alignItems="center" style={{ padding: '0px 15px', height: "100%"}}>
                                    <Grid item xs={2}>
                                        <Add />
                                    </Grid>
                                    <Grid item xs={6} style={{ paddingLeft: '6px' }}>
                                        Add List
                                    </Grid>
                                   
                                </Grid>
                            </Paper>
                        </Grid>

                    </Grid>
                </Grid>

                {/* TAGS */}
                <Grid item xs={12}>
                    <Grid container spacing={0}>
                        <p1 className="Title">TAGS</p1>
                        <Grid item xs={12} style={{ marginTop: "6px" }}>
                            <div style={{ display: "flex", fontSize: "10px"}}>
                                <Tag elevation={0} style={{backgroundColor: "#C6DEE1"}}>Square</Tag>
                                <Tag elevation={0} style={{backgroundColor: "#F2CFCF"}}>Name</Tag>
                                <Tag elevation={0} style={{backgroundColor: "#DFDFDF"}}>+ Add Tag</Tag>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Menu;