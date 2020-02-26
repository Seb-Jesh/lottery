import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) };
  }

  generate = () => {
    //Generate random numbers between 1 and maxNum and pick those numbers
    //maxBalls number of times
    this.setState(initialState => ({
      nums: initialState.nums.map(num =>
        Math.floor(Math.random() * this.props.maxNum + 1)
      )
    }));
  };

  handleClick = e => {
    this.generate();
  };

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(num => (
            <Ball num={num} />
          ))}
        </div>
        <button
          className="btn btn-success btn-sm Button"
          onClick={this.handleClick}
        >
          Generate Number
        </button>
      </section>
    );
  }
}

export default Lottery;
