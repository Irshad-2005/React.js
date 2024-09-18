import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
import { addItem } from "../utils/cardSlice";
import { useDispatch } from "react-redux";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(resInfo?.data?.cards[2]?.card?.card?.info);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item?.card?.info));
  };

  return (
    <div className="p-2 m-2">
      <h1 className="p-2 m-2 font-bold text-xl">{name}</h1>
      <p className="p-2 m-2">
        {cuisines.join(",")} - {costForTwoMessage}{" "}
      </p>
      <h2 className="p-2 m-4 font-bold text-2xl "> Menu </h2>
      <div className="flex flex-wrap justify-evenly">
        {itemCards.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
      
    </div>
  );
};

export default RestaurantMenu;
