import { NavLink, Outlet } from "react-router";
import "./header.css";

function College() {
  return (
    <div className="college-container">
      <h2>College Page</h2>
      <h3><NavLink to="/">Go Back to Home Page</NavLink></h3>

      <div className="college-links">
        <NavLink className="college-link" to="">
          Student
        </NavLink>

        <NavLink className="college-link" to="department">
          Department
        </NavLink>

        <NavLink className="college-link" to="details">
          College Details
        </NavLink>

      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default College;
