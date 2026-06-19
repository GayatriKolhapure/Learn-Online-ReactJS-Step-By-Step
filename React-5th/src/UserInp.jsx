// import { forwardRef } from "react"

// const UserInp = (props, ref) =>{
//     return(
//         <>
//         <input type="text" ref={ref} />
//         </>
//     )
// }
// export default forwardRef(UserInp);

const UserInp = (props) =>{
    return(
        <>
        <h3>Advanced from react 19</h3>
        <input type="text" ref={props.ref} />
        </>
    )
}
export default UserInp;