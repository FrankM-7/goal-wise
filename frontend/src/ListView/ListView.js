import React, { useEffect, useState } from 'react';
import axios from 'axios';

function List( {id} ) {
    useEffect(() => {
        axios.get('/api/list', {
            params: {
                token: localStorage.getItem('token'), 
                listId: id
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    
    return (
        <div>
            <h1>List {id} </h1>
        </div>
    )
}

export default List;