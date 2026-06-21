import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

function ContextApiComp() {

    const [subject, setSubject] = new useState('');



  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
            <option value={""}>Select Subject</option>
            <option value={"Maths"}>Maths</option>
            <option value={"Physics"}>Physics</option>
            <option value={"English"}>English</option>
        </select>
        <h2>Context Api</h2>
        <button onClick={()=>setSubject("")} style={{backgroundColor:'gray', padding:'3px',  borderRadius:'5px'}}>Clear Subject</button>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}
export default ContextApiComp;
