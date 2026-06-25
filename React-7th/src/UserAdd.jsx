import { useState } from "react";
import "./App.css";

const AddUser = () => {

    const [name, setName] = useState('');
    const[age, setAge] = useState('');
    const[email, setEmail] = useState('');

    const createUser = async () =>{
        console.log(name, age, email);
        const url =  "http://localhost:3000/users";
        let response = await fetch(url, {
            method:'post',
            body:JSON.stringify({name, email, age})
        });
        response = await response.json();
        if(response){
            alert("new User Added");
        }
    }

  return (
    <div className="add-user-container">
      <div className="add-user-card">
        <h1>Add New User</h1>

        <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />

        <input type="number" onChange={(event)=>setAge(event.target.value)} placeholder="Enter Age" />

        <input type="email"  onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" />

        <button onClick={createUser}>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;