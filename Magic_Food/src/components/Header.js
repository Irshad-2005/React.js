import { LOGO_URL } from "../utils/constants";
import {useState} from "react"
import {Link, NavLink} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName]=useState("Login");
  const onlineStatus = useOnlineStatus();
  const btnHandler = ()=>
    {
      btnName === "Login"?
        setBtnName("Logout"):setBtnName("Login")
        
    }
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="food image" src={LOGO_URL} className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
         <li>Status : {onlineStatus?"✅":"🔴"}</li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/grocery">Grocery</NavLink></li>
          <li><button className="login-btn" onClick={btnHandler}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
