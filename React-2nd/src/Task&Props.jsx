function TaskProps({name, age}){
    // console.log(props.name);
    console.log(name);
    console.log(age);
    
    
    
    return(
        <>
        <h1>User Component</h1>
        {/* <h2>{props.name}</h2> */}
        <h2>Name: {name}</h2>
        <h2>age: {age}</h2>
        
        </>

    )

}
export default TaskProps;


export function User({user}){
    return(
        <>
        <h1>User Object in Props</h1>
        <h2>Name: {user.name}</h2>
        <h2>Email: {user.email}</h2>
        <hr></hr>
        </>
    )
}