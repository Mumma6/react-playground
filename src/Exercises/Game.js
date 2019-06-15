import React, { Component } from "react";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scorePlayer1: 0,
      scorePlayer2: 0,
      gameOne: false
    };
  }

  handleClick = e => {
    this.setState({ gameOne: true, scorePlayer1: 0, scorePlayer2: 0 });
  };

  handleClickOff = e => {
    this.setState({ gameOne: false, scorePlayer1: 0, scorePlayer2: 0 });
  };

  incScoreP1 = e => {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ scorePlayer1: rand });
  };

  incScoreP2 = e => {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ scorePlayer2: rand });
  };

  render() {
    const { playerOneName, playerTwoName } = this.props;

    return (
      <section className="Game">
        <h2>
          {this.state.gameOne ? "GAME ON!!!" : "Please start the game..."}
        </h2>

        <button className="btn btn-success" onClick={this.handleClick}>
          Start the game
        </button>

        <button className="btn btn-danger" onClick={this.handleClickOff}>
          Reset the game
        </button>

        <h4>Lucky number 7 is the winner...</h4>
        <br />

        <h3>
          {playerOneName}s score is: {this.state.scorePlayer1}
          <br />
          <button className="btn btn-info" onClick={this.incScoreP1}>
            Play
          </button>
        </h3>

        <h3>
          {playerTwoName}s score is: {this.state.scorePlayer2}
          <br />
          <button className="btn btn-info" onClick={this.incScoreP2}>
            Play
          </button>
        </h3>

        <h2 className="winner">
          {this.state.scorePlayer1 === 7 && "Martin is the winner!"}
        </h2>

        <h2 className="winner">
          {this.state.scorePlayer2 === 7 && "Johan is the winner!"}
        </h2>
      </section>
    );
  }
}

export default Game;
