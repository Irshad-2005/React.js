import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  console.log(props.res.info);
  const { name, avgRating, cuisines, cloudinaryImageId, costForTwo } =
    props?.res?.info;

  return (
    <div className="res-card">
      <img alt="image" src={CDN_URL + cloudinaryImageId} className="res-logo" />
      <h3>{name}</h3>
      <h3>{avgRating} stars</h3>
      <h4>{props?.res?.info?.sla?.deliveryTime} minutes</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard;
