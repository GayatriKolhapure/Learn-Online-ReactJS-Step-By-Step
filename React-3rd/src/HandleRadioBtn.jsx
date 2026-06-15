import { useState } from "react";

function HandleRadioBtn() {


  const [gender, setGender] = useState("Female");
  const [city, setCity] = useState('Delhi');

  const CheckCity = (event) =>{
    setCity(event.target.value)
  }


  return (
    <>
      <h1>Handle Radion and Dropdown</h1>

      <h3>Select Gender</h3>
      <input
        type="radio"
        name="gender"
        id="male"
        value={"Male"}
          checked={gender=="Male"}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        id="female"
        value={"Female"}
        checked={gender=="Female"}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="female">Female</label>

      <h2>{gender.toString()}</h2>


      <br/> <br/> <br/>



      <h2>Select City</h2>
      <select  value={city} onChange={CheckCity}>
        <option value={"Delhi"}>Delhi</option>
        <option value={"Noida"} >Noida</option>
        <option value={"Pune"} >Pune</option>
        <option value={"Mumbai"} >Mumbai</option>
      </select>


      <h2>Selected City: {city}</h2>
    </>
  );
}
export default HandleRadioBtn;
