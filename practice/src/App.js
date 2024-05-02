import ReactDOM from "react-dom/client";
import Demo from "./components/Demo";
const App = () => {
  return (
    <div>
      <h1>This is Component</h1>
      <Demo />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
