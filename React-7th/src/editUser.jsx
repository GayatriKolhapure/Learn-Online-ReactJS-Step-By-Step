import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {
  const { id } = useParams();
  // console.log(id);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate('');


  useEffect(() => {
    getUserData;
  }, []);

  const url = "http://localhost:3000/users/" + id;

  const getUserData = async () => {
    console.log(id);
    let response = await fetch(url);
    response = await response.json();
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  };

  const updateUserData = async () => {
    console.log(name, age, email);
    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    console.log(response);

    if (response) {
      alert("User Updated successfully...!");
      navigate("/")
    }
  };

  return (
    <>
      <div className="add-user-container">
        <div className="add-user-card">
          <h1>Update User Data</h1>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter new Name"
          />

          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            placeholder="Enter new Age"
          />

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter new Email"
          />

          <button onClick={updateUserData}>Save User</button>
        </div>
      </div>
    </>
  );
};
export default EditUser;
