function TaskThree(){
    function callFun(){
        alert("function called")
    }
    const fruit=()=>{
        alert("Apple")
    }

    const fruits=(name)=>{
        alert(name)
    }

    return(
        <>
        <h1>Event and function call</h1>
        <button onClick={callFun}>Click</button>
        <br></br>
        <button onClick={fruit}>Apple</button>
        <br/>
        <button onClick={()=>fruits("Banana")}>Fruit</button>
        </>
    )
}
export default TaskThree;