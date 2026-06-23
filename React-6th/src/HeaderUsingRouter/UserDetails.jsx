import { Link, useParams } from "react-router";

function UserDetails() {

    const paramsData = useParams();
    console.log(paramsData.id);
    


  return (
    <div style={{marginLeft:20}}>
    <h2> UserDetails page</h2>
    <h3>User Id : {paramsData.id}</h3>
    <h3><Link to={'/users'}>Back to User Page</Link></h3>
    
    </div>
  )
}

export default  UserDetails;