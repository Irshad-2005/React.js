import { useState } from "react";

const User = (props)=>
{
       const [count,setCount ] = useState(0);
       
  
        const {name,location , phone} = props;
        return (
                <div className="user-card">
                      <h2>Count = {count}</h2>
                     <button onClick={()=> setCount(count+1)}>Count Increament</button>
                      <h3>Name : {name}</h3>
                      <h4>location : {location}</h4>
                      <h4>Email : irshadsheikh2005@gmail.com</h4>
                      <h4>Phone : {phone}</h4>
                </div>
        );
}

export default User;