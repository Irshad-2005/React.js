import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";
const MenuCard = ({ item }) => {
  console.log(item);
  const { name, price, imageId, defaultPrice, ratings } = item.card.info;
  const { rating } = ratings.aggregatedRating;
 const dispatch = useDispatch();

  const addItemHandler = ()=>
  {
      dispatch(addItem(item.card.info));
  }
  return (
    <div className="w-52 h-72 shadow-gray-300 shadow-lg p-2 m-2">
      <img alt="menu image" className="w-48 h-32" src={CDN_URL + imageId} />
      <h1 className="px-1 mx-1 font-bold">{name}</h1>
      <h2 className="px-1 mx-1 font-bold">
        Price : {price / 100 || defaultPrice / 100} ₹
      </h2>
      <h3 className="px-1 mx-1">Rating : {rating} ⭐</h3>
      <button className="p-2 mx-12 my-4 rounded-lg bg-green-400 hover:bg-red-400" onClick={()=> addItemHandler()}>Add Card</button>
    </div>
  );
};

export default MenuCard;
