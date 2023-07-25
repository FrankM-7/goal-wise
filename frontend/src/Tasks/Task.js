import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import './Task.css';

const TaskText = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(0,0,0,0.0)",
    marginLeft: "35px",
}));

function checkDate(){
    var timeInput = "11:59:00", input = "2023-07-21"; // delete once you have a way to input date
    var today = new Date(), timeDate = new Date(input + 'T' + timeInput).toLocaleString(undefined, { hour: 'numeric', minute: 'numeric', hour12: true });
    var numDays = ((new Date(input + 'T' + timeInput) - today)/(1000 * 60 * 60 * 24)), ceilDays = Math.ceil(numDays), inputDay = input.slice(-2);
    if (numDays > 0) {
        return "Due: " + (inputDay == today.getDate() ? `Today at ${timeDate}` : numDays < 2 ? "Tomorrow" : `In ${ceilDays} days`);
    } else {
        return "Past Due: " + (inputDay == today.getDate() ? `Today at ${timeDate}` : numDays > -2 ? "Yesterday" : `${Math.abs(ceilDays)} days ago`);
    } 
} 

function doThis() {
    console.log("Hello");
}
function Task( {id, task} ) {
    return (
        <div className="unselectable taskMargin" onClick={doThis} style={{cursor: "pointer", flexDirection: 'column'}}>
            <Grid item xs={12} className='taskGrid'>
                <input type="checkbox" id="task1" name="task1" value="task1" /> 
                <TaskText elevation={0}>{task}</TaskText>
                <div className='dateFont'>{checkDate()}</div>
            </Grid>
            <Grid item xs={12} style={{marginTop: "21px"}}>
                <Divider variant="middle" />
            </Grid>
        </div>
    );
};

export default Task;
