import { useState } from "react";

function TaskSix(){
    const [ count, setCount] = useState(0);
    return(
        <>
        <h1>Multiple condition in React js</h1>
        {/* <h2>count:{count}</h2> */}
        <button onClick={()=>setCount(count+1)}>Counter</button>
        {
            count === 0 ? <h2>Condition 0</h2>:
            count === 1 ? <h2>Condition 2</h2>:
            count === 2 ? <h2>Condition 3</h2>:
            count === 3 ? <h2>Condition 4</h2>:
            null
        }
        </>
    )
}
export default TaskSix;