import College from "./College";

function TaskThree() {
  const clgData = [
    {
      name: "IET",
      city: "Alwar",
      students: [
        {
          name: "Gayatri",
          age: 21,
          email: "g7@gmail.com",
        },
      ],
    },
    {
      name: "IIT",
      city: "Delhi",
      students: [
        {
          name: "Kirti",
          age: 21,
          email: "k7@gmail.com",
        },
      ],
    },
    {
      name: "KCIET",
      city: "Hisar",
      students: [
        {
          name: "Arti",
          age: 21,
          email: "a7@gmail.com",
        },
      ],
    },
  ];
  return (
    <div>
      <h2>Nested Looping with Component</h2>
      {clgData.map((clg, idx) => {
        return (
          <div key={idx}>
            <College clg={clg} />
          </div>
        );
      })}
    </div>
  );
}
export default TaskThree;
