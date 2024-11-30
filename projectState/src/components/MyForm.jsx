import React, { useState } from "react";

function MyForm() {
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [email, setEmail] = useState("");
  // document.getElementById('fname').value; avoid this js code in react another method here we need to use

  // I am using single state for all data

  const [inputs, setInputs] = useState({});

  function handleSubmit(e) {
    // onSubmit Also event Listener so that return e
    e.preventDefault();
    // console.log("Form Submitted");
    // console.log("Name : ", name);
    // console.log("Age : ", age);
    // console.log("Email : ", email);

    console.log(inputs);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Online Registration Form</h1>
      <label htmlFor="fname">First Name : </label>
      <input
        type="text"
        id="fname"
        // placeholder={name}
        onChange={(e) => {
          setInputs((prevStats) => {
            return { ...prevStats, name: e.target.value };
          });
        }}
      />
      <label htmlFor="age">Age : </label>
      <input
        type="text"
        id="fname"
        onChange={(e) => {
          setInputs((prevStats) => {
            return { ...prevStats, age: e.target.value };
          });
        }}
      />

      <label htmlFor="email">Email : </label>
      <input
        type="text"
        id="email"
        onChange={(e) => {
          setInputs((prevStats) => {
            return { ...prevStats, email: e.target.value };
          });
        }}
      />
      <input type="submit" value="Submit" />
      {/* 
      <h2>{inputs.name}</h2>
      <h2>{age}</h2>
      <h2>{email}</h2> */}
    </form>
  );
}

export default MyForm;
