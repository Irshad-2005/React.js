import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../utils/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterOfRestaurant,setFilterOfRestaurant] =useState([]);
  const [searchText,setSearchText] = useState("");

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2623635&lng=77.4328391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)
    let allResList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(allResList);
    setFilterOfRestaurant(allResList)
    console.log(allResList)
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("body render");
  const onlineStatus =  useOnlineStatus();
  if(onlineStatus === false)
    {
       return (
        <div>
            <h2>Please check your internet</h2>
        </div>
       );
    }
  return listOfRestaurant.length === 0 ? <Shimmer/> :(
    <div className="body">
      <div className="top-rated">
          <div className="search-box">
                <input type="text"
                  value={searchText}
                  onChange={(e)=>{
                    setSearchText(e.target.value);
                    
                    }}/>
                <button className="btn-search" onClick={()=>
                  {
                     const filter = listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                     setFilterOfRestaurant(filter)
                  }
                }>search</button>
          </div>
        <button
          className="top-btn"
          onClick={() => {
            let filterData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilterOfRestaurant(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
        
      </div>
      <div className="res-container">
        {filterOfRestaurant.map((res) => (
         <Link key={res.info.id}  to={"restaurants/"+res.info.id}><RestaurantCard res={res} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
