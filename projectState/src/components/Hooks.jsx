import React from "react";
import { useState } from "react";

function Hooks() {
  //   const [getModel, setModel] = useState("Yamaha");
  //   const [getBrand, setBrand] = useState("ABC");
  //   const [getColor, setColor] = useState("Red");
  //   const [getYear, setYear] = useState("Red");

  const [getScooter, setScooter] = useState({
    Model: "Yamaha",
    Brand: "YTom",
    Color: "Red",
    Year: "2024",
  });

  function update() {
    setScooter((prevState) => {
      return { ...prevState, Color: "Green" };
    });
    //Spread Operator
  }

  console.log("Current State", getScooter);
  return (
    <div>
      <h1>Scooter</h1>
      <p>Model : {getScooter.Model}</p>
      <p>Brand : {getScooter.Brand}</p>
      <p>Color : {getScooter.Color}</p>
      <p>Year : {getScooter.Year}</p>
      <button onClick={update}> Model Update</button>
    </div>
  );
}

export default Hooks;
