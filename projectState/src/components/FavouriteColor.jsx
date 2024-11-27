import React from "react";
import { useState } from "react";

function FavouriteColor() {
  //   let color = "Green";

  //   function change() {
  //     color = "blue";
  //   }

  const [getColor, setColor] = useState("Green");

  return (
    <div>
      <h1>Favourite Color is : {getColor}</h1>
      {/* <button onClick={() => (color = "Red")}>Change Color Red</button>
      <button
        onClick={() => {
          color = "Yellow";
        }}
      >
        Change Color Yellow
      </button> */}
      <button onClick={() => setColor("Purple")}>Change Color Purple</button>
      <button onClick={() => setColor("Blue")}>Change Color Blue</button>
    </div>
  );
}

export default FavouriteColor;
