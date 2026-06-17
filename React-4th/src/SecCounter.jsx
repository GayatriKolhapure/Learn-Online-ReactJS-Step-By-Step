import { useEffect } from "react";

const SecCounter = ({cnt, data}) =>{

    const handleCounter=()=>{
        console.log("handle counter called");
        
    }

    const handleBoth=()=>{
        console.log("Both btns called");
        
    }
    const callsOnlyOnce=()=>{
        console.log("calls only once");
        
    }
    useEffect(()=>{
        callsOnlyOnce();
    },[])

    
    useEffect(()=>{
        handleCounter();
    },[data])

    useEffect(()=>{
        handleBoth();
    },[data, cnt])

    
    return(
        <>
        <h3>Counter value: {cnt}</h3>
        <h3>Data Value: {data}</h3>
        </>
    )
}
export default SecCounter;