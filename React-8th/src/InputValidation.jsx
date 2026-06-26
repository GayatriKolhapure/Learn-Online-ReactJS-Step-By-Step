import { useState } from "react";
import './App.css'

const InputValidation = () => {

    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState();
    const [pwd, setPwd] = useState('');
    const [pwdErr, setPwdErr] = useState();

    const handleName = (event) => {
        console.log(event.target.value);
        if(event.target.value.length > 5){
            setNameErr("Please enter valid userName, only 5 characters allow");
        }else{
            setNameErr();
        }
        
    }
    const handlePassword = (event) => {
        console.log(event.target.value);
        let regex = /^[A-Z0-9]+$/i;
        if(!regex.test(event.target.value)){
            setPwdErr("Please enter valid password, only numbers and alphabet allowds");
        }else{
            setPwdErr();
        }
        
    }




  return (
    <>
      <input type="text" className={nameErr ? "error" : ""} onChange={handleName} placeholder="Enter a name" />
      <span className="red-color">{nameErr && nameErr}</span>
      <br/> <br/>
      <input type="text" className={pwdErr ? "error" : ""} onChange={handlePassword} placeholder="Enter a password" />
      <span className="red-color">{pwdErr && pwdErr}</span>
      <br/><br/>
      <button disabled={nameErr || pwdErr}>Login</button>
    </>
  );
};
export default InputValidation;
