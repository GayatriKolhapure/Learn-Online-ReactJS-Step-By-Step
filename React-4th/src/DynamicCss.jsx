import { useState } from "react";

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
    // console.log(bgColor, textColor);
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
      <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>

      <div
        style={{
          display: grid ? "flex" : "block",
          flexWrap: "wrap",
          margin: "40px",
        }}
      >
        <div style={cardStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
            style={{ width: "200px" }}
          />
          <div style={{ color: textColor }}>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
            style={{ width: "200px" }}
          />
          <div style={{ color: textColor }}>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
            style={{ width: "200px" }}
          />
          <div style={{ color: textColor }}>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
            style={{ width: "200px" }}
          />
          <div style={{ color: textColor }}>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
            style={{ width: "200px" }}
          />
          <div style={{ color: textColor }}>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default DynamicCss;
