import { useState, useEffect,useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../utils/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
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
  const {user,setUser} = useContext(UserContext);
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
    <div className="">
      <div className="flex">
          <div className="flex">
                <input className=" m-2 px-4 border-solid border-black bg-gray-300 rounded-lg"  type="text"
                  value={searchText}
                  onChange={(e)=>{
                    setSearchText(e.target.value);
                    
                    }}/>
                <button className="m-2 px-3 py-1.5 bg-blue-600 rounded-lg" onClick={()=>
                  {
                     const filter = listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                     setFilterOfRestaurant(filter)
                  }
                }>Search</button>
                <input value={user.name} onChange={(e)=> setUser({name:e.target.value,email:"new@gmail.com"})}/>
                
            </div>
          <div>
        <button
          className="bg-green-500 m-2 px-3 py-1.5 rounded-lg"
          onClick={() => {
            let filterData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterOfRestaurant(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
         </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {filterOfRestaurant.map((res) => (
         <Link key={res.info.id}  to={"restaurants/"+res.info.id}><RestaurantCard res={res} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
