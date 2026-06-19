import {useRef } from 'react';

const UncontrolledComp = () => {
    const handleForm = (event) =>{
        event.preventDefault();
        const user = document.querySelector("#user").value;
        console.log(user);
        const pwd = document.querySelector("#pwd").value;
        console.log(pwd);   
    }

    const userRef = useRef(null);
    const passwordRef = useRef(null);



    const handleFormRef = (event) =>{
        event.preventDefault();
        const user = userRef.current.value;
       console.log(user);
        const pwd = passwordRef.current.value;
       console.log(pwd);
         
    }
  return (
    <>
    <h3>Uncontrolled component with useRef</h3>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="userRef" placeholder="enter user name" />
        <br />
        <br />
        <input type="password" id="pwdRef" placeholder="enter a password" />
        <button>Submit</button>
      </form>
      <br/><hr/><br/>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input type="text" id="user" ref={userRef} placeholder="enter user name" />
        <br />
        <br />
        <input type="password" ref={passwordRef} id="pwd" placeholder="enter a password" />
        <button>Submit with Ref</button>
      </form>
    </>
  );
};
export default UncontrolledComp;
