import React from "react";
import ReactDOM from "react-dom";

const LOGO =
  "https://media.istockphoto.com/id/1313644269/vector/gold-and-silver-circle-star-logo-template.jpg?s=612x612&w=0&k=20&c=hDqCI9qTkNqNcKa6XS7aBim7xKz8cZbnm80Z_xiU2DI=";
const Header = () => {
  return (
    <div>
      <div style={{ margin: 10, padding: 10 }}>
        <img
          className="logo"
          src={LOGO}
          style={{ width: "250px", height: "150px", margin: 5 }}
        />
        <input
          type="text"
          placeholder="write here"
          style={{
            marginLeft: 400,
            padding: 10,
          }}
        />
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
