import { Link } from "react-router";
import "./users.css";

function User() {
  const users = [
    {
      id: 1,
      name: "Gayatri Kolhapure",
      email: "gayatri@gmail.com",
      role: "Full Stack Developer",
    },
    {
      id: 2,
      name: "Rahul Patil",
      email: "rahul@gmail.com",
      role: "Java Developer",
    },
    {
      id: 3,
      name: "Sneha Sharma",
      email: "sneha@gmail.com",
      role: "Frontend Developer",
    },
    {
      id: 4,
      name: "Amit Joshi",
      email: "amit@gmail.com",
      role: "Backend Developer",
    },
  ];

  return (
    <div className="user-container">
      <h2>User List</h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>

              <td>
                <Link to={'/userDetails/'+user.id}>{user.name}</Link>
              </td>

              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
