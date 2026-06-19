function User({displayName, name}){

    // const name = "Anil";

    return(
        <>
        <h3>Call Parent component Function from child component</h3>
        <button onClick={()=>displayName(name)}>Display User</button>
        </>
    )
}
export default User;