import React from "react";
import { useState } from "react";

class ClassState extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }

  render() {
    return (
      <>
        <h1>This is class components States {this.state.color}</h1>
        <button
          onClick={() => {
            this.setState({ color: "Blue" });
          }}
        >
          Change Color
        </button>
      </>
    );
  }
}
export default ClassState;
