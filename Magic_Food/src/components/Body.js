import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([
    
  ]);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2623635&lng=77.4328391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    let allResList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(allResList);
  };
  useEffect(() => {
    getData();
  }, []);
{
  if(listOfRestaurant ==0)
    {
      return <p>Loading</p>
    }
}
  return (
    <div className="body">
      <div className="top-rated">
        <button
          className="top-btn"
          onClick={() => {
            let filterData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurant(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((res) => (
          <RestaurantCard key={res.info.id} res={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
