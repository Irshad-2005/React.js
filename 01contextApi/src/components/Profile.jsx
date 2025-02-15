import { useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = ()=>
{
  const {user} = useContext(UserContext);
    return(
        <div>
            <h3>Welcome : {user}</h3>
        </div>
    )
}
export default Profile;