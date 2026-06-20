import { useState } from "react";

const DerivedState = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleUser = () =>{
    setUsers([...users, user])
  }
 // console.log(users);

 const total = users.length;
 const last = users[users.length-1];
 const unique = [...new Set(users)].length;

  return (
    <>
    <h3>Total Users: {total} </h3>
    <h3>Last User: {last} </h3>
    <h3>Unique Total Users: {unique}</h3>
      <input
        type="text"
        onChange={(event) => setUser(event.target.value)}
        placeholder="Enter a User"
      />
      <button onClick={handleUser}>Add User</button>
      {
        users.map((item, index) => (
            <h4 key={index} >{item}</h4>
        ))
      }
    </>
  );
};
export default DerivedState;
