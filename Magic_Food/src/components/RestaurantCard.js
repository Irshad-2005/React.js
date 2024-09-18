import {useContext} from "react"
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  console.log(props)
  const { name, avgRating, cuisines, cloudinaryImageId, costForTwo } =
    props?.res?.info;

    const {user}= useContext(UserContext);
    

  return (
    <div className="m-4 p-5 bg-gray-200 w-[250] h-[400] hover:bg-gray-400">
      <img alt="image" src={CDN_URL + cloudinaryImageId} className="w-[240] h-[150]" />
      <h3 className="py-2 font-bold text-md">{name}</h3>
      <h3>{avgRating} stars</h3>
      <h4>{props?.res?.info?.sla?.deliveryTime} minutes</h4>
      <h4 className="overflow-hidden">{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
     <h5>{user.name}</h5>
     <h5>{user.email}</h5>
    </div>
  );
};
export default RestaurantCard;
