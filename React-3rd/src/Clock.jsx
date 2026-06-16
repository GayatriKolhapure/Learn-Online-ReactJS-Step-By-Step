import { useEffect, useState } from "react";
import TaskHelper from "./Task2Helper";

const Clock = ({color}) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h2
        style={{
          color: color,
          backgroudColor: "#000",
          width: "120px",
          borderRadius: "5px",
          border: "2px solid white",
          padding: "5px",
        }}
      >
        {time}
      </h2>
    </div>
  );
};
export default Clock;
