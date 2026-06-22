import { useState } from "react";

const UseToggle = (defaultVal) =>{
    const [val, setVal] = useState(defaultVal);

    function toggleVal(val){
        if(typeof val != 'boolean'){
            setVal(!val);
        }else{
            setVal(val);
        }
    }

    return(
        [val, toggleVal]
    )
}
export default UseToggle;