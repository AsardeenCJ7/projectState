import React from "react";
import { useState } from "react";

function NumInc() {
  const [getNum, setNum] = useState(0);
  function increment() {
    setNum(getNum + 1);
  }
  return (
    <div>
      <h1>{getNum}</h1>
      <button onClick={increment}>Increment Here</button>
      <button
        onClick={() => {
          setNum(getNum - 1);
        }}
      >
        Decrement Here
      </button>

      <button
        onClick={() => {
          setNum(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default NumInc;
