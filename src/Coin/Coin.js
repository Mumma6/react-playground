import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    return (
      <section className="Coin">
        <img src={this.props.info.imgSrc} alt={this.props.info.side} />
      </section>
    );
  }
}

export default Coin;
