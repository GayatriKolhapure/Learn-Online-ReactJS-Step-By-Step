import { useId } from 'react'

const UseId = () => {
    return(
        <>
        <UserForm />
        <UserForm />
        </>
    )
}


const UserForm = () =>{
    const user = useId();
    // const name = useId();
    // const pwd = useId();
    // const terms = useId();
    // const skills = useId();

    return(
        <>
        <h3>UseId Hook</h3>
        {/* <h2>{name}</h2>
        <h2>{pwd}</h2>
        <h2>{terms}</h2>
        <h2>{skills}</h2> */}

        <form action={""}>
            <label htmlFor={user + "name"}>Enter User Name: </label>
            <input type='text' id={user+ "name"} placeholder='Enter a name'/>
            <br/><br/>
            <label htmlFor={user+"pwd"}>Enter User Password: </label>
            <input type='text' id={user+"pwd"} placeholder='Enter a Password'/>
            <br/><br/>
            <label htmlFor={user+"skills"}>Enter User Skills: </label>
            <input type='text' id={user+"skills"} placeholder='Enter a Skills'/>
            <br/><br/>
            <input type='checkbox' id={user+"terms"} />
             <label htmlFor={user+"terms"
             }>Terms & Conditions </label>
            <br/><br/>
            <hr/>
        </form>






        {/* <form action={""}>
            <label htmlFor={name}>Enter User Name: </label>
            <input type='text' id={name} placeholder='Enter a name'/>
            <br/><br/>
            <label htmlFor={pwd}>Enter User Password: </label>
            <input type='text' id={pwd} placeholder='Enter a Password'/>
            <br/><br/>
            <label htmlFor={skills}>Enter User Skills: </label>
            <input type='text' id={skills} placeholder='Enter a Skills'/>
            <br/><br/>
            <input type='checkbox' id={terms} />
             <label htmlFor={terms}>Terms & Conditions </label>
            <br/><br/>
            <hr/>
        </form> */}
        </>
    )
}
export default UseId;