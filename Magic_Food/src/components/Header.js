import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux"
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const btnHandler = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  const { user } = useContext(UserContext);
  const cardItems = useSelector(store => store.card.item);
  console.log(cardItems);
  
  return (
    <div className="bg-pink-300 px-2 my-2 flex justify-between">
      <div className="logo-container">
        <img alt="food image" src={LOGO_URL} className="w-[150px]"></img>
      </div>
      <div>
      <span className="py-10 m-5 text-red-900 font-bold">{user.name}</span>
        <ul className="flex justify-items-center m-4 p-4">
          <li className="px-4">Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/grocery">Grocery</NavLink>
          </li>
          <li className="px-4">
            <NavLink to ="/card"> Card - {cardItems.length}</NavLink> 
          </li>
          <li>
            
            <button
              className="bg-blue-600 text-white px-4 py-1 rounded-lg"
              onClick={btnHandler}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
