
let guest=0;
function PureComp(){
    return(
        <>
        <h2>Keeping components pure</h2>
        <Cup/>
        <Cup/>
        </>
    )
}

const Cup=()=>{
    guest++;
    return(
        <h3>
            We have {guest} guest and we have to make {guest} cup of tea
        </h3>
    )
}





export default PureComp;