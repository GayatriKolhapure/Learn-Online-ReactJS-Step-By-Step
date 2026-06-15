import { useState } from "react";
function Task1() {
  const [val, setval] = useState("😇");

  function dataFun(event) {
    console.log(event.target.value);
  }
  return (
    <>
      <h2>Get Input field value</h2>
      <h3>{val}</h3>
      <input
        type="text"
        value={val}
        onChange={(event) => {
          setval(event.target.value);
          dataFun(event);
        }}
        placeholder="Enter user name"
      />
      <input
        type="text"
        value={val}
        onChange={(event) => {
          setval(event.target.value);
          dataFun(event);
        }}
        placeholder="Enter user name"
      />
      <input
        type="text"
        value={val}
        onChange={(event) => {
          setval(event.target.value);
          dataFun(event);
        }}
        placeholder="Enter user name"
      />
    </>
  );
}
export default Task1;
