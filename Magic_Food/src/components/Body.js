import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([
    {
      info: {
        id: "520021",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
        deliveryTime: 74,
      },
    },
    {
      info: {
        id: "520022",
        name: "UBQ by Barbeque Nation",
        cloudinaryImageId: "wtxzaleh5he39fudgshh",
        costForTwo: "₹300 for two",
        cuisines: ["North Indian", "Barbecue", "Biryani"],
        avgRating: 4.1,
        deliveryTime: 52,
      },
    },
    {
      info: {
        id: "520023",
        name: "McDonald's",
        cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
        costForTwo: "₹300 for two",
        cuisines: ["North Indian", "Barbecue", "Biryani"],
        avgRating: 4.3,
        deliveryTime: 47,
      },
    },
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
