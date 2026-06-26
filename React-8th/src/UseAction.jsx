import { useActionState } from "react";

const UseAction = () => {


  const handleLogin = (prevData, formData) => {
    // console.log("called");
    let name = formData.get('name');
    let password = formData.get('password');
    let regex = /^[A-z0-9]+$/i;

    if(!name || name.length > 5){
        return{error:'Name can not be empty or Name should not contain more than 5 characters', name, password}
    }else if(!regex.test(password)){
        return{error:'password can contains only numbers and alphabets', name, password}
    }else{
        return{message:"Login done...!", name, password}
    }

    // console.log(name, password);
    
    
  };
  const [data, action, pending] = useActionState(handleLogin);
  console.log(data);

  return (
    <>
      <h2>Validation with useAction in React</h2>
      {
        data?.message &&  <span style={{color:"green"}}>{data?.message}</span>
      }
      {
        data?.error &&  <span style={{color:"red"}}>{data?.error}</span>
      }
      <form action={action}>
        <input type="text" defaultValue={data?.name} name="name" placeholder="Enter a name" />
        <br /> <br />
        <input type="text" defaultValue={data?.password} name="password" placeholder="Enter a password" />
        <br />
        <br />
        <button disabled={data?.error}>Login</button>
      </form>
    </>
  );
};
export default UseAction;
