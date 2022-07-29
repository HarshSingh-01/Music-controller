import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App