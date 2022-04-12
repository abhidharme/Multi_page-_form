import React from "react";
import { FormContext } from "../Context/AllformContext";
import { useNavigate } from "react-router-dom";

export const FormOne = ()=>{
    
    const {name , age , date_of_birth , dispatch} = React.useContext(FormContext);
   const navigate = useNavigate();
    return(
        <div>
            <input type="text" 
            placeholder="Enter Name"
            value={name}
            onChange={(e)=>
            dispatch({ type: "CHANGE NAME" , payload: e.target.value})}
            />
            <br></br>

            <input type="text" 
             placeholder="Enter age" 
             value={age}
             onChange={(e)=>
            dispatch({type:"CHANGE AGE" , payload: e.target.value})}
             
             />
             <br></br>

<input type="date" 
             placeholder="Enter date_of_birth" 
             value={date_of_birth}
             onChange={(e)=>
            dispatch({type:"CHANGE DATE" , payload: e.target.value})}
             
             />
             <br></br>

             <button disabled={!name || !age || !date_of_birth} onClick={()=>{navigate("/form2")}}>next</button>
        </div>
    )
}