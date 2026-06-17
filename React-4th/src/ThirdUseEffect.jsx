import { useState } from "react";
import ThirdCounter from "./ThirdCounter";

const ThirdUseEffect = () => {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);

  return (
    <>
    {
        display ? <ThirdCounter cnt={counter} data={data} /> : null
    }
      
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <button onClick={() => {setData(data + 1);}}>Data</button>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </>
  );
};
export default ThirdUseEffect;
