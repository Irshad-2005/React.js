import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <img
            className="w-24 h-24 p-2"
            src="https://images.pexels.com/photos/2453205/pexels-photo-2453205.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="p-2">
          <ul className=" flex gap-10 mx-52 items-center p-4">
            <NavLink
             className={({isActive})=>` block  ${isActive ? "text-orange-700":"text-gray-500"} hover:text-blue-800 hover:bg-gray-100`}
              to="home"
            >
              <li>Home</li>
            </NavLink>
            <NavLink  className={({isActive})=>`block  ${isActive ? "text-orange-700": "text-gray-500"} hover:text-blue-800 hover:bg-gray-100`}to="about">
              <li>About </li>
            </NavLink>
            <NavLink className={({isActive})=>` block ${isActive ? "text-orange-700":"text-gray-500"} hover:text-blue-800 hover:bg-gray-100`} to="contact">
              <li> Contact</li>
            </NavLink>
            <NavLink className={({isActive})=>`block ${isActive ? "text-orange-700" : "text-gray-400"}`}to="user">
              <li>User</li>
              </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
