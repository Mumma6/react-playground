import React, { Component } from "react";
import LotteryBall from "./LotteryBall";
import "./Lottery.css"

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery!",
    maxBalls: 7,
    maxNum: 50
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.maxBalls })
    };
  }

  generate = () => {
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }

  handleClick = () => {
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <h2>{this.props.title}</h2>
        <div>
          {this.state.nums.map(n => (
            <LotteryBall num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Start Lottery</button>
      </section>
    );
  }
}

export default Lottery;
