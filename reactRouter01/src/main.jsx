import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter ,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'

// const router = createBrowserRouter([
//    {
//       path:"/",
//       element:<App/>,
//       children:[
//         {
//            path:"/",
//            element:<Home/>
//         },
//         {
//           path:"home",
//           element:<Home/>
//         },
//         {
//           path:"about",
//           element:<About/>
//         },
//         {
//           path:"contact",
//           element:<Contact/>
//         }

//       ]
//    }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
         <Route path="/" element={<Home/>}/>
         <Route path="home" element={<Home/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="user" element={<User/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
