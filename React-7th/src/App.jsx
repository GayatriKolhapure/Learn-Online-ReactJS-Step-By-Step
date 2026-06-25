import { useEffect, useState } from "react";
import "./App.css";
import JsonEx from "./JsonServerEx";

function App() {
  // const [usersData, setUsersData] = useState([]);

  // useEffect(() => {
  //   getUsersData();
  // }, []);

  // const getUsersData = async () => {
  //   const url = "https://dummyjson.com/users";
  //   let response = await fetch(url);
  //   response = await response.json();

  //   //console.log(response);
  //   setUsersData(response.users);
  // };

  // console.log(usersData);

  return (
    <>
      {/* <h2 className='bg-red-400 border-green-500 border-2 '>Tailwind CSS setup</h2> */}

      {/* <h2 className="title">Fetched Data from Dummy API</h2>

      <div className="user-container">
        {usersData &&
          usersData.map((user) => (
            <div className="user-card" key={user.id}>
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <p>Age: {user.age}</p>
            </div>
          ))}
      </div> */}



      <JsonEx/>
    </>
  );
}

export default App;
