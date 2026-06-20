import { useState } from "react";

const UpdateArr = () => {
  // const [name, setName] = useState('Gayatri');

  const [data, setData] = useState(["anil", "sam", "ram", "tony"]);

  const [dataDetails, setDataDetails] = useState([
    { name: "Gayatri", age: 21 },
    { name: "Amrut", age: 23 },
    { name: "Aarti", age: 29 },
  ]);

  const handleUser = (user) => {
    // console.log(user);
    setData([...data], (data[data.length - 1] = user));
    console.log(data);
  };

  const updateUserAge = (age) => {
    // console.log(user);
    setData([...data], (dataDetails[dataDetails.length - 1].age = age));
    console.log(data);
  };

  return (
    <>
      <h2>Updating Array in React</h2>

      {/* <h3>Name: {name}</h3>
       <button onClick={()=>setName('Anil')}>Update name</button> */}

      <input
        type="text"
        placeholder="enter last user name "
        onChange={(event) => handleUser(event.target.value)}
      />
      {data.map((item, index) => (
        <h4 key={index}>Name:{item}</h4>
      ))}
      <hr />

      <input
        type="text"
        placeholder="enter last user age "
        onChange={(event) => updateUserAge(event.target.value)}
      />
      {dataDetails.map((item, index) => (
        <h4 key={index}>
          Neme: {item.name}, Age: {item.age}
        </h4>
      ))}
    </>
  );
};
export default UpdateArr;
