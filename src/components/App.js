import React from "react";
import NewTodo from "./Todo";
import Count from "./Count";
import Expensive from "./Expensive";
import Reactmemo from "./ReactMemo";

const App =()=>{
    return(
        <div>
            <h1>React.useMemo</h1>     
            <NewTodo/>
            <Count/>
            <Expensive/>
            <Reactmemo/>
        </div>
    )
}

export default App;