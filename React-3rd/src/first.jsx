import { useState } from "react";

function First(){
    const [val, setval] = useState("😇");
    return(
        <>
        <h2>Get Input field value</h2>
        <h3>{val}</h3>
        {/* <input type="text" onChange={(event)=>alert(event.target.value)} placeholder="Enter user name"/> */}
        <input type="text" value={val} onChange={(event)=>setval(event.target.value)} placeholder="Enter user name"/>
        <button onClick={()=>setval("")}>Clear</button>
        
        
        </>
    )
}
export default First;