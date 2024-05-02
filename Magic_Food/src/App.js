import ReactDOM from "react-dom/client";
import "../style.css";
import Header from "./components/Header";
import Body from "./components/Body";

const Applayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
