import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  // document.getElementById('fname').value; avoid this js code in react another method here we need to use
  return (
    <form>
      <h1>Online Registration Form</h1>
      <label htmlFor="fname">First Name : </label>
      <input
        type="text"
        id="fname"
        placeholder={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setName();
        }}
      >
        Submit
      </button>

      <h2>{name}</h2>
    </form>
  );
}

export default MyForm;
