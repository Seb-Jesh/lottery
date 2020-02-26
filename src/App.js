import React, { Component } from "react";
import "./App.css";
import Lottery from "./components/Lottery";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Lottery />
        <Lottery title={`Mini`} maxNum={20} maxBalls={4} />
      </div>
    );
  }
}
