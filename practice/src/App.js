import ReactDOM from "react-dom/client";
import Demo from "./components/Demo";
import Counter from "./components/Counter.Classic";
import "../style.css"
const App = () => {
  return (
    <div >
      <h1>This is Component</h1>
      <Counter />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
