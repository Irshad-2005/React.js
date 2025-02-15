import {  useState,useContext } from "react";
import UserContext from "../context/UserContext";


const Login = ()=>
{
    const {setUser} = useContext(UserContext);
    const [username,setUsername] = useState("");
    const [password , setPassword] = useState("");
    const handlerSubmit = (e)=>
    {
       
         setUser(username);
    }
    return (
           <div>
                  <input 
                     type="text" 
                     placeholder="Username"
                     value={username}
                     onChange={(e)=>setUsername(e.target.value)}
                   />
                   {" "}
                  <input 
                    type="text" 
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                 />
                  <button onClick={handlerSubmit}>Submit</button>
           </div>
    )
}

export default Login;