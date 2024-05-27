import { useState ,useEffect } from "react";
import {useParams } from "react-router-dom"
import Shimmer from "../utils/Shimmer";
import { INFO_API } from "../utils/constants";
const RestaurantMenu = ()=>
{
        const [resInfo,setResInfo] = useState(null);
      const {resId} =   useParams();
      console.log(resId);
       
        useEffect(()=>
        {
           fetchInfo();
        },[]);
 
        const fetchInfo = async ()=>
                {
                        const res = await fetch(`${INFO_API}${resId}`);
                        const json = await res.json();
                        console.log(json)
                        setResInfo(json);
                }
                if(resInfo === null) return <Shimmer/>
         const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
         const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
        
         
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