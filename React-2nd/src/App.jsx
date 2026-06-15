import './App.css'
import Task1 from './Task1.jsx'
import TaskSec from './Task2.jsx'
import TaskThree from './Task3.jsx'
import TaskFourState from './Task4State.jsx'
import TaskFive from './task5.jsx'
import TaskSix from './Task6.jsx'
import TaskSeven, {User} from './Task&Props.jsx'
import College from './College.jsx'
import Student from './Student.jsx'
import User1 from './User.jsx'
import Wrapper from './Wrapper.jsx'

// import { useState } from 'react'

function App() {
  // let name = "Gayatri";
  // let userObj1 = {
  //   name:"Gayatri",
  //   age:21,
  //   email:"gayatri@test.com"
  // };
  // let userObj2 = {
  //   name:"Peter",
  //   age:25,
  //   email:"Peter@test.com"
  // };

  // let collegeName = ["IIT","DYP",'SIT','KIT']

  // const [student, setStudent]=useState("sam");


  return (
    <>
    {/* <Task1/> */}
    {/* <TaskSec/> */}
    {/* <TaskThree/> */}
    {/* <TaskFourState/> */}
    {/* <TaskFive/> */}
    {/* <TaskSix/> */}
    {/* <TaskSeven name={name}age={21} /> */}
    {/* <User user={userObj1} />
    <User user={userObj2} />

    <College name={collegeName[1]}/>
    <College name={collegeName[0]}/>
    <College name={collegeName[2]}/>



    {student && < Student name={student}/>}
    <button onClick={()=>setStudent("Ram")}>Change Student name</button> */}




    {/* <User1 userName="Gayatri"/>
    <User1 /> */}

    <Wrapper color="orange">
      <h2>Hello Everyone</h2>
    </Wrapper>
     <Wrapper>
      <h2>Hello Gayatri</h2>
    </Wrapper>
     <Wrapper>
      <h2>Hello Guys</h2>
      <h3 style={{color:"red"}}>Please Login</h3>
    </Wrapper>

    </>
  )
}

export default App
