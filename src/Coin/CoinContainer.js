import React, { Component } from "react";
import { choice } from "../helpers";
import Coin from "./Coin";
import "./Coin.css";


class CoinContainer extends Component {
static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
      };
    });
  }

  resetGame = () => {
    this.setState({currCoin: null, nFlips: 0, nHeads: 0, nTails: 0})
  }

  handleClick(e) {
    this.flipCoin();
  }

  resetClick(e) {
    this.resetGame();
  }
  render() {
    return (
      <div className='CoinContainer'>
        <h2>Let's Flip A Coin!</h2>
        <button className="btn btn-success" onClick={this.handleClick}>Flip Me!</button>
  
        <p>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
        <button className="btn btn-danger" onClick={this.resetClick}>Reset!</button>
      </div>
    );
  }
}
export default CoinContainer;
