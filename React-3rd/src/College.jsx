import Student from "./Student";

const College = ({ clg }) => {
  console.log(clg);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "25px",
        margin: "25px",
        borderRadius: "15px",
        border: "2px solid #6c63ff",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
        color: "#222",
        fontWeight: "500",
      }}
    >
      <h3>College Name: {clg.name}</h3>
      <ul>
        <li>
          <h4>City: {clg.city}</h4>
        </li>
        <li>
          <h3>Students</h3>
          <ul>
            <li>
              {clg.students.map((stud, idx) => {
                return (
                  <div key={idx}>
                    <Student stud={stud} />
                  </div>
                );
              })}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default College;
