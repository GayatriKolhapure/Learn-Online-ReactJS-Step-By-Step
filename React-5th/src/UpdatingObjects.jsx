import { useState } from "react";

const UpdatingObj = () => {
 // const [name, setName] = useState("Gayatri");

  const [data, setData] = useState({
    name: "Gayatri",
    address: {
      city: "Delhi",
      country: "India",
    },
  });

  const handleName = (value) => {
   // data.name=value;
    
    console.log(data);
    setData({...data, name:value})
    
    //setName(value);
  };
  const updateCity = (value) => {
    // data.address.city=value;

    console.log(data);
    setData({...data, address:{...data.address, city: value}})
    
    //setName(value);
  };
  return (
    <>
      <h2>Updating objects in React</h2>
      {/* // <h3>{name}</h3> */}
      {/* <button onClick={handleName}>Update Name</button> */}

      <input type="text" placeholder="update Name" 
      onChange={(event) => handleName(event.target.value) } />
      <br/> <br/>
      <input type="text" placeholder="update City" 
      onChange={(event) => updateCity(event.target.value) } />

      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </>
  );
};
export default UpdatingObj;
