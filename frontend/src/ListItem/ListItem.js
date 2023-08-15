import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ListItemConst = ({ color, name, number, currentPick }) => {
    const BGcolor = currentPick === true ? '#DFDFDF' : '#E8E8E8';
    const numberColor = currentPick === true ? '#EDEDED' : '#DFDFDF';
    const boldText = currentPick === true ? 'bold' : 'normal';
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

function ListItem( {id, listName, onSelect, isSelected} ) {
    const navigate = useNavigate();

    function navigation() {
        navigate(`/list/${id}`);
        onSelect(id); // Notify the parent component of the selection
    }

    return (
        <Grid item xs={12} onClick={navigation}>
            <ListItemConst color="#F26666" name={listName} number="2" currentPick={isSelected} />
        </Grid>
    )
}

export default ListItem;