import { Navigate, Routes, Route, Outlet } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import CollegeDetails from "./Details";
import Users from "./Users";
import UserDetails from "./UserDetails";

function HeaderRouter() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Navbar />}>     
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/userDetails/:id" element={<UserDetails/>} />
          
          
          <Route path="/about" element={<About />} />
          <Route path="user">
            <Route path="login" element={<Login />} />
            {/* <Route path="signup" element={<Signup />} /> */}
          </Route>
        </Route>
        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<CollegeDetails />} />
        </Route>

        <Route path="/*" element={<PageNotFound/>}/>
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}

export default HeaderRouter;
