import {lazy,Suspense} from "react"
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import "../style.css"
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
//import Grocery from "./components/Grocery.js";

const Grocery = lazy(()=>import("./components/Grocery.js"));
const About = lazy(()=>import("./components/About.js"));
const Applayout = () => {
  return (
    <div>
      <Header />
     <Outlet />
    </div>
  );
};
const Router = createBrowserRouter([
  {
     path:"/",
     element:<Applayout/>,
     children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
    },
    { 
       path:"/contact",
       element:<Contact/>
    },
    {
       path:"/grocery",
       element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }
     ],
     errorElement:<Error/>
  }
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={Router}/>);
