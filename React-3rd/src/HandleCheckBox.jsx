import { useState } from "react";

function HandleCheckBox() {
    const [skills, setSkills] = useState([]);

    const handleSkills = (event) =>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            // setSkills(event.target.value)
            setSkills([...skills,  event.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
        
    }



  return (
    <>
    <h3>Select Your Skills</h3>

    <input onChange={handleSkills} type="checkbox" id="java" value="java"  />
    <label htmlFor="java" >JAVA</label>
    <br/> <br/>
    <input onChange={handleSkills} type="checkbox" id="react" value="react"/>
    <label htmlFor="react"  >React JS</label>
     <br/> <br/>
    
    <input onChange={handleSkills} type="checkbox" id="mysql" value="mysql"  />
    <label htmlFor="mysql" >MySql</label>
     <br/> <br/>

    <input onChange={handleSkills} type="checkbox" id="js" value="js"/>
    <label htmlFor="js"  >JavaScript</label>
     <br/> <br/>

    <input onChange={handleSkills} type="checkbox" id="cpp" value="cpp"/>
    <label htmlFor="cpp"  >C++</label>

    <h2>{skills.toString()}</h2>
    
    </>
  )
}
export default HandleCheckBox;
