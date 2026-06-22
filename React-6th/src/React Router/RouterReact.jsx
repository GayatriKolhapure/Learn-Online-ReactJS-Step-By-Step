import { Routes, Route, Link } from "react-router";
import Home from "./Home";
import About from "./About";

function RouterReact() {


  return (
    <>
    <h2>React Router </h2>
    <Link to={'/'}>Home</Link>
    <br/>
    <Link to={'/about'}>About</Link>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    
    </>
  )
}

export default RouterReact;