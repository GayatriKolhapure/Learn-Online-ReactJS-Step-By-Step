import { useEffect, useState } from "react";

function UserList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const url = "http://localhost:3000/users";
  
  const getUserData = async () => {
  

    let response = await fetch(url);
    let data = await response.json();

    setUserData(data);
    setLoading(false);
  };

  const deleteUser = async (id) => {
    console.log(id);
     let response = await fetch(url+"/"+id, {
            method:'delete'
        });
    response = await response.json();
    if(response){
      alert("record deleted")
      getUserData()
    }
   setLoading(false);

  }

  return (
    <div className="container">
      <h2>Make Routes and Pages for Add User and User List UI</h2>

      {loading ? (
        <h2>Data Loading...</h2>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td><button onClick={()=>deleteUser(user.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;
