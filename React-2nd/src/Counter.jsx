import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);
    const [rCount, setRCount] = useState(0);
    return(
        <>
        <h1>Counter:{count}</h1>
        <h1>Counter:{rCount}</h1>
        <button onClick={()=>setCount(count+1)}>Updated Counter</button>
        <button onClick={()=>setRCount(count-1)}>Reverse Counter</button>
        </>
    )
}
export default Counter;