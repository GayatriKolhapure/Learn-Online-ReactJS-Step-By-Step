import { useState } from "react";

function TaskFive(){

    const [display, setDisplay] = useState(true);
    return(
        <>
        <h1>Toggle Button</h1>

        {
            display ? <h1>Gayatri</h1>:<h1></h1>
        }

        <button onClick={()=>setDisplay(!display)} >Toggle</button>

        </>
    )
}
export default TaskFive;