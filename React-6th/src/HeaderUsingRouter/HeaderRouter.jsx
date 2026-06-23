import {Navigate, Routes, Route } from "react-router";
import Navbar from "./Navbar";
import Home from './Home'
import About from './About'
import Login from './Login'
import PageNotFound from "./PageNotFound";

function HeaderRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/*" element={<PageNotFound/>}/> */}
        <Route path="/*" element={<Navigate to="/" />} />

      
      </Routes>
    </>
  );
}

export default HeaderRouter;
