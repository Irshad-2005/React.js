import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" w-full  h-[164px] p-4 text-3xl bg-gray-600 text-white text-center my-2">
      Footer Component
      <div className="text-sm " >
        <ul className="flex gap-10">
          <NavLink className={({isActive})=>`block ${isActive ? "text-orange-500" : "text-gray-100"}`} to="home">
            <li>Home</li>
          </NavLink>
          <NavLink  className={({isActive})=> `block ${isActive ? "text-orange-500" : "text-gray-100"}`} to="about">
            <li>About</li>
          </NavLink>
          <NavLink className={ ({isActive})=> `block ${isActive ? "text-orange-500" : "text-gray-100"}`} to="contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
