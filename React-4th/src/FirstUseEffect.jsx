import { useState, useEffect } from "react";

const FirstUseEffect = () => {
    const [cnt, setCnt] = useState(0);
    const [data, setData] = useState(0);

    useEffect(()=>{
       //callOnce();
    }, [])

    useEffect(()=>{
        //callOnce();
    }, [cnt])

    useEffect(()=>{
        callOnce();
    }, [cnt, data])

    function cntFun(){
        console.log("counter fun", cnt);
        
    }

    const callOnce= () =>{
        console.log("callOnce function called");
        
    }

    // callOnce();

    return(
        <>
        <h2>useEffect Hooks</h2>
        <button onClick={()=>{setCnt(cnt+1)}}>Counter {cnt}</button>
        <button onClick={()=>{setData(data+1)}}>Data {data}</button>
        </>
    )
}
export default FirstUseEffect;