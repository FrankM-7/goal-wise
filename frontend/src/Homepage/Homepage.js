import React from 'react';
import Menu from '../Menu/Menu';
import "./Homepage.css";
import Today from '../Today/Today';
import ListView from '../ListView/ListView';
import { useParams } from 'react-router-dom';
import TaskListTemplate from '../TaskListTemplate/TaskListTemplate';
import { useState, useEffect } from 'react';

function Homepage ( {onLogout, type} ) {
    const { id } = useParams();
    const [key, setKey] = useState(0); // Unique key for re-rendering

    useEffect(() => {
        // Update the key whenever the type changes
        setKey(key + 1);
    }, [type]);

    function mainRender() {
        if (type === "today") {
            return <TaskListTemplate key={key} type={"today"} />
        } else if (type === "list") {
            return <TaskListTemplate key={key} type={"list"} id={id} />
        }
    }
    return (        
    <div className='Homepage'>
        <div className="InsideContainer">
            <Menu onLogout={ onLogout } />
            { mainRender() }
        </div>
    </div>
    );
}

export default Homepage;