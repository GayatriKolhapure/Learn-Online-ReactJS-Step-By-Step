import { useState } from "react";
import Clock from "./Clock";

function TaskHelper(){
    const [color, setColor] = useState('Red');

    return(
        <div>
            <select
            style={{padding:'10px', color}}
            onChange={(event)=>setColor(event.target.value)
            }>
                <option  value={"red"}>Red</option>
                <option  value={"White"}>White</option>
                <option  value={"green"}>Green</option>
                <option  value={"yellow"}>Yellow</option>
            </select>
            <Clock color={color}/>

        </div>
    )
}
export default TaskHelper;