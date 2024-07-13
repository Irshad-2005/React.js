import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams } from "react-router-dom"
import Shimmer from "../utils/Shimmer";

const RestaurantMenu = ()=>
{
       
      const {resId} =   useParams();
      const resInfo = useRestaurantMenu(resId);
      console.log(resId);

                if(resInfo === null) return <Shimmer/>
         const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
         const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
        console.log( resInfo?.data?.cards[2]?.card?.card?.info);
         
     return(
             <div>
                <h1>{name}</h1>
                <p>{cuisines.join(",")} - {costForTwoMessage} </p>
                <h2> Menu </h2>
                  <ul>
                        {itemCards.map((item)=><li key={item?.card?.info?.id}>{item?.card?.info?.name} - ₹ {item?.card?.info?.price/100}</li>)}                  
                  </ul>
            </div> );
 }

export default RestaurantMenu;