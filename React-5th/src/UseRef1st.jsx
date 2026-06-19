import { useRef } from "react"

const UseRef = () =>{

    const inputRef = useRef(null);
    const h1Ref = useRef(null);

    const inputHandler = () =>{
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color="red";
        inputRef.current.placeholder="Enter a password";
        inputRef.current.value="123"
        
    }

    const toggleHandler=()=>{
        if(inputRef.current.style.display != 'none'){
            inputRef.current.style.display='none';
        }else{
             inputRef.current.style.display='inline';
        }
    }
    const displayH1=()=>{
        if(h1Ref.current.style.color != 'green'){
            h1Ref.current.style.color='green';
        }else{
             h1Ref.current.style.color='white';
        }
    }


    return(
        <>
        <h2>useref in React</h2>
        <button onClick={toggleHandler}>Toggle</button>
        <input ref={inputRef} type="text" placeholder="enter your name"/>
        <button onClick={inputHandler}>Focus on input field</button>
        <hr/>
        <h1 ref={h1Ref}>Learn Code with me!</h1>
        <button onClick={displayH1}>Handler</button>
        </>
    )

}
export default UseRef;