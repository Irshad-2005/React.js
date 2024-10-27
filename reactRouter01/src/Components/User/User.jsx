import { useEffect,useState } from "react";
const User = ()=>
{
        const [user,setUser] = useState();

        useEffect(()=>{

            fetchData();
},[]);

 const fetchData = async ()=>
{
       const res=await fetch("https://api.github.com/users/Irshad-Ali-11");
       const resjson = await res.json();
       setUser(resjson);
       console.log(resjson)
}
      {  return user  ? (<h1>Loading</h1>) :   (

                <div>
                        <h1>User Component</h1>
                         <div className="p-6 m-2 text-3xl  bg-orange-600 text-black">
                                Following :
                         </div>
                        <img src="" alt="image"/>
                      
                        
                </div>
        )
}
}
export default User