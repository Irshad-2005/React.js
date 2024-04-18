import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
  return (
    <div>
      <h1>This is Title Component</h1>
    </div>
  );
};
const App = () => (
  <div>
    <h1>This is Functional Component </h1>
    <TitleComponent />
    <TitleComponent></TitleComponent>
    {TitleComponent()}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
