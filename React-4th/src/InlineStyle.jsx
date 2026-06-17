const InlineStyle = () => {
  const cardStyle = {
    margin: "5px",
    border: "1px solid #555454cc",
    padding: "20px",
    width: "200px",
    boxShadow: "1px 1px 1px 1px",
  };
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
      <div style={{ display: "flex", flexWrap: "wrap", margin: "40px" }}>
        <div style={cardStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
            style={{ width: "200px" }}
          />
          <div>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
              style={{ width: "200px" }}
            />
          </div>
          <div>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
              style={{ width: "200px" }}
            />
          </div>
          <div>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
              style={{ width: "200px" }}
            />
          </div>
          <div>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
              style={{ width: "200px" }}
            />
          </div>
          <div>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
              style={{ width: "200px" }}
            />
          </div>
          <div>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
              style={{ width: "200px" }}
            />
          </div>
          <div>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
              style={{ width: "200px" }}
            />
          </div>
          <div>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
              style={{ width: "200px" }}
            />
          </div>
          <div>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>{" "}
        <div style={cardStyle}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
              style={{ width: "200px" }}
            />
          </div>
          <div>
            <h3>Gayatri Kolhapure</h3>
            <h3>Software Engineer</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default InlineStyle;
