function TaskSec(){
    const name="Gayatri";

    const userObj = {
        name:"Peter",
        email:"peter@test.com"
    }

    let x = 20;
    let y = 30;
    function fruit(){
        return "Apple";
    }
    function sum(a, b){
        return a + b;
    }

    const numsArr = [1, 2, 3, 4, 5];

    const path = "https://samstoy.in/cdn/shop/files/big-size-soft-plush-teddy-for-girls-ahmedabad-gujarat-india-pink-teddy-with-bow.webp?v=1749833467";
    
    return(
        <>
        <h1>Variables with curly brackets</h1>
        <h3>{name}</h3>
        <h3>{x+y}</h3>
        <h3>{fruit()}</h3>
        <h3>{sum(20, 50)}</h3>
        <h3>{name?name:"user not found"}</h3>
        <h3>{userObj.email}</h3>
        <h3>{numsArr[0]}</h3>
        <img style={{height:'300px', width:'300px'}} src={path}></img>
        <br/>
        <input value={name} id={name}></input>
        </>
    )
}
export default TaskSec;