import React from 'react';
import Game from "./Exercises/Game";
import RollDice from "./Dice/RollDice";
import Lottery from "./Lotto/Lottery";
import CoinContainer from "./Coin/CoinContainer";
import BoxContainer from "./ColorBoxes/BoxContainer";


import "./App.css"



function App() {
  return (
    <div className="App">
      <h1 className="Title">The React playground</h1>
      <Game
        playerOneName="Martin"
        playerTwoName="Johan"
      />
      <RollDice />
      <Lottery />
      <Lottery title="Mini Lottery" maxNum={5} maxBalls={5} />
      <CoinContainer />
      <BoxContainer />
    </div>
  );
}

export default App;
