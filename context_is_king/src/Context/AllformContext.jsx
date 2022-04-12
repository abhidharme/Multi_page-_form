import React from "react";
import  { createContext } from "react";
import axios from "axios";

const initState = {
    name: "",
    age: "",
    date_of_birth: "",
    state_of_residence: "",
    address: "",
    pin_code: "",

}

const reducer = (state , action)=>{
    switch (action.type){
        case "CHANGE NAME":
            return {...state , name:action.payload};
        case "CHANGE AGE":
            return {...state , age:action.payload};
        case "CHANGE DATE":
            return {...state , date_of_birth:action.payload}  
        case "CHANGE RESIDENCE":
            return {...state , state_of_residence:action.payload}
        case "CHANGE ADDRESS":
            return {...state , address:action.payload};   
        case "CHANGE PINCODE":
            return {...state , pin_code:action.payload}               
            default:
                throw new Error();
    }
};




export const FormContext = createContext(); //box

export function FormContextProvider({children}){


    const [state , dispatch] = React.useReducer(reducer , initState);

//    const handleSubmit = ()=>{
//        fetch(`http://localhost:3030/users` , {
//            method: "POST",
//            body: JSON.stringify(state),
//            headers: {
//                "Content-Type": "applicaio/json"
//            }
//    }).then((res)=> res.json())
//    .catch((err)=> console.log(err))
//    }
const handleSubmit = ()=>{
   console.log(state)
    axios.post(" http://localhost:3030/users",state)
    .then(alert("registered successfully"))
    .catch((e)=>{console.log(e.message)})
         
}

//    React.useEffect(() =>{
//        console.log(state);
//    },[state])

    const {name , age , date_of_birth, state_of_residence, address, pin_code } = state;

    return(
        <FormContext.Provider value={{name , age , date_of_birth, state_of_residence, address, pin_code  ,dispatch , handleSubmit}}>{children}</FormContext.Provider>
    )
}