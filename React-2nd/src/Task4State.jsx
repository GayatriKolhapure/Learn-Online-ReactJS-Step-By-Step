import { useState } from "react";
import Counter from "./Counter";

function TaskState(){
    // let fruit = "Apple"
    // const handleFruit=()=>{
    //     fruit = "Banana";
    //     console.log(fruit);    
    // }

   const handleFruit=()=>{
    setFruit("Banana");
   }

    const [fruit, setFruit] = useState("Apple");

    return(
        <>
        <h1>State in React Js</h1>
        <h3>{fruit}</h3>
        <button onClick={handleFruit}>Change fruit name</button>

        <Counter/>


        </>
    )
}
export default TaskState;