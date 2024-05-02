import { useState } from "react";
const Demo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count} </h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Increament
      </button>
    </div>
  );
};

export default Demo;
