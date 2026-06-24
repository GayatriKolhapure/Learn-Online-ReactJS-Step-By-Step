import { NavLink, Link, Outlet } from "react-router";
import "./header.css";

function Navbar() {
  return (
    <div>
      <div className="header">
        <div>
          <NavLink className="link" to={"/"}>
            <h2>Logo</h2>
          </NavLink>
        </div>

        <div>
          <ul>
            <li>
              <NavLink className="NavLink" to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/about">
                About
              </NavLink>
            </li>

            <li>
              <NavLink className="NavLink" to={"./user/login"}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"./college"}>
                College
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"./users"}>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"./users/list"}>
                List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default Navbar;
