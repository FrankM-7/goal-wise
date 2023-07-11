import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const TaskText = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(0,0,0,0.0)",
    marginLeft: "35px",
}));


function doThis() {
    console.log("Hello");
}
function Task( {id, task} ) {
    return (
        <div className="unselectable" onClick={doThis} style={{cursor: "pointer"}}>
            <Grid item xs={12} style={{display: "flex", height: "65px", alignItems: "center", marginLeft: "40px"}}>
                <input type="checkbox" id="task1" name="task1" value="task1" /> 
                <TaskText elevation={0}>{task}</TaskText>
            </Grid>
            <Grid item xs={12} style={{margin: "0px 0px"}}>
                <Divider variant="middle" />
            </Grid>
        </div>
    );
};

export default Task;
