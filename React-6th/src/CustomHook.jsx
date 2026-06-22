import UseToggle from "./UseToggle"

export default function CustomHook(){

    const[value, toggleValue] = UseToggle(true);
    const[data, setData] = UseToggle(true);

    console.log(value);
    

    return(
        <>
        <button onClick={()=>toggleValue(!value)}>Toggle Heading</button>
        <button onClick={()=>toggleValue(false)}>Hide Heading</button>
        <button onClick={()=>toggleValue(true)}>Show Heading</button>
        {
            value ? <h2>Custom Hook 1 in React</h2> : null
        }
        <hr/>
        <button onClick={()=>setData(!data)}>Toggle Heading</button>
        <button onClick={()=>setData(false)}>Hide Heading</button>
        <button onClick={()=>setData(true)}>Show Heading</button>
        {
            data ? <h2>Custom Hook 2 in React</h2> : null
        }
        <hr/>
        </>
    )
}