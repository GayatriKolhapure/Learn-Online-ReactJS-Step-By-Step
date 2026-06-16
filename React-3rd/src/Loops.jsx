import User from './User.jsx'

function Loops() {
  // const userNames = ["anil", "sam", "peter", "bruce"];

  const userData = [
    {
      name: "sam",
      age: 25,
      email: "s@gmail.com",
      id: 1,
    },
    {
      name: "anil",
      age: 25,
      email: "a@gmail.com",
      id: 2,
    },
    {
      name: "Peter",
      age: 25,
      email: "p@gmail.com",
      id: 3,
    },
  ];

  return (
    <>
      <h2>Loops in JSX with Map Function</h2>
      <table border={1}>
        <tbody>
          {userData.map((user) => {
            return (
              <tr key={user.id}>
                <td><User data={user}/></td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Loops;
