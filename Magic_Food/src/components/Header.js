import { LOGO_URL } from "../utils/constants";
import {useState} from "react"
const Header = () => {
  const [btnName, setBtnName]=useState("Login");
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li><button className="login-btn" onClick={btnHandler}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
