function JsxComponent(){
    const userName = "Gayatri"
    let x = 10;
    let y = 200;
    return(
        <>
        <h3>{userName}</h3>
        <h3>{x+y}</h3>
        <button onClick={() => alert("Clicked")}>Click</button>
        </>
    )
}
export default JsxComponent;