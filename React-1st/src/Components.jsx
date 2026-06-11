function Component(){
    alert(sum())
    return(
        <>
         <h3>First Component</h3>
        </>
    )

}
export default Component;

export function SecComponent(){
    return(
        <h3>
            Second component
        </h3>
    )
}

function sum(){
    return 10 + 10;
}
