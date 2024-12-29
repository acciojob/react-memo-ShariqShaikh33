import React from "react";
import "../styles/Count.css";

const Count=()=>{
    const minusCount=()=>{
        let countElement=document.getElementById("countValue")
        countElement.innerHTML-=1;
    }
    const addCount=()=>{
        let countElement=document.getElementById("countValue")
        countElement.innerHTML=parseInt(countElement.innerHTML)+1;
    }

    return(
        <div>
            <div className="countDiv">
            <p>Count: </p>
            <button id="minusCount" onClick={minusCount}>-</button>
            <p id="countValue" >0</p>
            <button id="addCount" onClick={addCount}>+</button>
            </div>
        </div>
    )
}

export default Count;