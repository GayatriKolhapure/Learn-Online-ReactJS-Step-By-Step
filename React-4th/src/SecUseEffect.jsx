import SecCounter from "./SecCounter";
import { useState } from "react";

const SecUseEffect = ()=>{

    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);

    return(
        <>
        <SecCounter cnt={counter} data={data} />
        <button onClick={()=>setCounter(counter+1)}>Counter</button>
        <button onClick={()=>{setData(data+1)}}>Data {data}</button>
        </>
    )
}
export default SecUseEffect;