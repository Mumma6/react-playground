import React, { Component } from "react";
import "./Box.css";
import { choice } from "../helpers";

class Box extends Component {
  static defaultProps = {
    allColors: ["#FE9221", "#B17EBF", "#55BCDB", "#5087A6", "#003E66", "#03A696", "#038C8C", "#025E73", "#D0E3E9", "#EAEBED", "#F20C0C", "#F26B5E", "#F2AE2E"]
  };
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.allColors) };
  }

  pickColor = () => {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  };

  handleClick = () => {
    this.pickColor();
  };

  render() {
    return (
      <div className="Box1">
        <div
          className="Box"
          style={{ backgroundColor: this.state.color }}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Box;
