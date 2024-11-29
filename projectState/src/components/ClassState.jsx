import React from "react";
import { useState } from "react";

class ClassState extends React.Component {
  constructor() {
    super();
    this.state = { color: " red", model: " Model 1" };
  }

  render() {
    return (
      <>
        <h1>
          This is class components States <span>{this.state.color} </span> state
          model
          <span>{this.state.model}</span>
        </h1>
        <button
          onClick={() => {
            this.setState({ color: " Blue", model: " Model 2" });
          }}
        >
          Change Color
        </button>
      </>
    );
  }
}
export default ClassState;
