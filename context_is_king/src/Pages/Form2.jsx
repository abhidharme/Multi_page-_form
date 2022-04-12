import React from "react";
import { FormContext } from "../Context/AllformContext";
import { Navigate, useNavigate } from "react-router-dom";

export const FormTow = ()=>{

   
    const {
        state_of_residence, 
        address,
         pin_code ,
         name,
         age,
         date_of_birth,
         dispatch,
         handleSubmit,
         } = React.useContext(FormContext);

         if(!name || !age || !date_of_birth){
            return <Navigate to="/form1" />
        }
        
        //  const handleSubmit= ()=>{
        //      axios.post("http://localhost:3030/users" , {
        //         state_of_residence, 
        //         address,
        //          pin_code ,
        //          name,
        //          age,
        //          date_of_birth
        //      }).then((res)=>{
        //          console.log(res.message)
        //      }).catch((err)=>{
        //          console.log(err.message)
        //      })
        //      }
    const navi= useNavigate();

    return(
        <div>
            <button onClick={()=>navi("/user")}>User List</button>
            <br>
            </br>
            <br></br>
            <input type="text" 
            placeholder="Enter Sate"
            value={state_of_residence}
            onChange={(e)=>
            dispatch({ type: "CHANGE RESIDENCE" , payload: e.target.value})}
            />
            <br></br>

            <input type="text" 
            placeholder="Enter address"
            value={address}
            onChange={(e)=>
            dispatch({ type: "CHANGE ADDRESS" , payload: e.target.value})}
            />
<br></br>
            <input type="text" 
            placeholder="Enter pincode"
            value={pin_code}
            onChange={(e)=>
            dispatch({ type: "CHANGE PINCODE" , payload: e.target.value})}
            />
<br></br>
            <button disabled={
                !state_of_residence ||
                !address ||
                !pin_code ||
                !name ||
                !age ||
                !date_of_birth
            }
            onClick={handleSubmit } 
            >SUBMIT</button>
        </div>
    )
}