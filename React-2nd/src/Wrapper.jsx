function Wrapper({children, color="pink"}){
    return(
        <div style={{color:color, border:"5px solid green", width:"300px", margin:"20px"}}>
        {children}
        </div>
    )
}
export default Wrapper;