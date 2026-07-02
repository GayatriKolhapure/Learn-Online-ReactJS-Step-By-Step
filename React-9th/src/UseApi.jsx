import { Suspense, use } from "react";

const fetchData = () =>
  fetch("https://dummyjson.com/users").then((response) => response.json());
  //console.log(fetchData());

const userResource=fetchData();
  

export default function UseAPI() {
//     const fetchData = () =>
//   fetch("https://dummyjson.com/users").then((response) => response.json());
//   //console.log(fetchData());

// const userResource=fetchData();
  return (
    <>
      <h2>USE API in React JS</h2>

      <Suspense fallback={<p>Loading...</p>}>
      <User userResource={userResource}/>
      </Suspense>
      
    </>
  );
}

const User = ({userResource}) => {
   // console.log(userResource);
    const userData = use(userResource);
    console.log(userData.users);
    
    
  return( <>
  <h2>Users List</h2>
  <div>
    <h3>user list</h3>
    {
        userData?.users?.map((user, index)=>(
            <h6 key={index}>{user.firstName}</h6>
        ))
    }
  </div>
  </>)
};
