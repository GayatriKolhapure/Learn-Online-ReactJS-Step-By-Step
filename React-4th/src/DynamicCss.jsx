import { useState } from "react";
import Developer from "./Developer";

function DynamicCss() {
  const [cardStyle, setCardStyle] = useState({
    margin: "5px",
    border: "1px solid #555454cc",
    padding: "20px",
    width: "200px",
    boxShadow: "1px 1px 1px 1px",
  });

  const [textColor, setTextColr] = useState("black");

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor });
    setTextColr(textColor);
  };

  const [grid, setGrid] = useState(true);

  return (
    <>
      <h2
        style={{
          color: "red",
          backgroundColor: "yellow",
          width: "300px",
          padding: "20px",
        }}
      >
        Inline style in React JS
      </h2>

      <button onClick={() => updateTheme("gray", "white")}>Gray Theme</button>
      <button onClick={() => updateTheme("white", "black")}>
        Default Theme
      </button>
      <button onClick={() => setGrid(!grid)}>Toggle Grid</button>

      <div
        style={{
          display: grid ? "flex" : "block",
          flexWrap: "wrap",
          margin: "40px",
        }}
      >
        <Developer textColor={textColor} cardStyle={cardStyle} />
      </div>
    </>
  );
}
export default DynamicCss;
