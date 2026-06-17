const Developer = ({ textColor, cardStyle }) => {
  const employees = [
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
      name: "Gayatri Kolhapure",
      department: "Java Developer",
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
      name: "Amit Sharma",
      department: "Frontend Developer",
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
      name: "Priya Patil",
      department: "Backend Developer",
    },
    {
      id: 4,
      image: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
      name: "Rahul Verma",
      department: "UI/UX Designer",
    },
    {
      id: 5,
      image: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
      name: "Sneha Joshi",
      department: "Full Stack Developer",
    },
  ];

  return (
    <>
      {employees.map((emp) => {
        return (
          <div key={emp.id} style={cardStyle}>
            <img src={emp.image} slt={emp.name} style={{ width: "200px" }} />
            <div style={{ color: textColor }}>
              <h3>{emp.name}</h3>
              <h4>{emp.department}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Developer;
