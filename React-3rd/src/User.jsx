const User = ({data}) =>{
    return(
        <>
        <h3>Name: <span style={{color:"pink"}}>{data.name}</span> </h3>
        <h3>Name: <span style={{color:"pink"}}>{data.age}</span> </h3>
        <h3>Name: <span style={{color:"pink"}}>{data.email}</span> </h3>
        <hr></hr>
        </>
    )
}
export default User;