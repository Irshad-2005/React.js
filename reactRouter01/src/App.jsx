import Header from "./Components/Header/Header.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
      <Header />
      <Outlet/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
