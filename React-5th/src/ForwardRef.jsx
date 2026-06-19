import { useRef } from 'react'
import UserInp from './UserInp';

function ForwardRef(){

    const inpRef = useRef(null);

    const updateInp = () =>{
        // console.log("fun");
        inpRef.current.value=100;
        inpRef.current.focus();
        inpRef.current.style.color="green";
        
    }
    return(
        <>
        <h2>Forward Ref</h2>
        {/* <input  type='text' ref={inpRef}/> */}
        <UserInp ref = {inpRef}/>
        <button onClick={updateInp}>Update Input field</button>
        </>
    )
}
export default ForwardRef;