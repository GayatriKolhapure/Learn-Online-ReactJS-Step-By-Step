import { useEffect, useState } from "react";

function JsonEx() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = "http://localhost:3000/users";

    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  };

 return (
  <div className="container">
    <h2 className="title">Integrated JSON Server API and Loader</h2>
    
    <div className="user-list">
      
      {  !loading? 
      userData && 
        userData.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
          </div>
        )):<h1>Data Loading...</h1>}
        
    </div>
  </div>
);
}

export default JsonEx;
