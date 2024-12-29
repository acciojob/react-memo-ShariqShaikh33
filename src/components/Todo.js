import React, { useState } from "react";



const NewTodo=()=>{

    const [tasklist, setTaskList] = useState([]);

    const addTask=()=>{
        setTaskList((prev)=> [...prev, "New todo"]);
    }


    return(
        <div>
            <h1>My Todos</h1>
            <div>
                <ul>
                    {tasklist.map((item, index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>

                <button id="newTodo" onClick={addTask}>Add Todo</button>
                <hr></hr>
            </div>
        </div>
        
    );
}

export default NewTodo;