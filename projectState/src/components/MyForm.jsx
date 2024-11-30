import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  // document.getElementById('fname').value; avoid this js code in react another method here we need to use

  function handleSubmit(e) {
    // onSubmit Also event Listener so that return e
    e.preventDefault();
    console.log("Form Submitted");
    console.log("Current State", name);
  }
  return (
    <form onSubmit={handleSubmit}>
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
      <input type="submit" value="Submit" />

      <h2>{name}</h2>
    </form>
  );
}

export default MyForm;
