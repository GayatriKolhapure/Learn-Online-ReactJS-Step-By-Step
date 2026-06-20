
const AddUser=({setUser})=>{


    return(
        <>
        <h3>Add User </h3>
        <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter user name"/>
        <hr/>
        </>
    )
}
export default AddUser;