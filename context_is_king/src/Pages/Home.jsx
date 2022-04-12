
import { useNavigate } from "react-router-dom"
export const Home = ()=>{
      const navigate = useNavigate()
    return (
<>
<button onClick={()=>{navigate("/user")}}>User List</button>
        <button onClick={()=>{navigate("/form1")}}>Fill Form</button>
        </>
    )
}