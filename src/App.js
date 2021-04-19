import React from "react";
import RollDice from "./components/RollDice";
import "./styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">
          <i className="fas fa-dice" />
          DiceRoller <i className="fas fa-dice" />
        </h1>

        <RollDice />
      </div>
    );
  }
}

export default App;
