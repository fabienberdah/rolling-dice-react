import React from "react";
import Die from "./Die";

class RollDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: {
        value: "",
        face: "",
      },
      die2: {
        value: "",
        face: "",
      },
      isRolling: false,
    };
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice = () => {
    const dieFaces = ["one", "two", "three", "four", "five", "six"];
    const die1Value = Math.ceil(Math.random() * 6);

    const die2Value = Math.ceil(Math.random() * 6);

    const die1Face = dieFaces[die1Value - 1];
    const die2Face = dieFaces[die2Value - 1];

    this.setState({
      die1: {
        value: die1Value,
        face: die1Face,
      },
      die2: {
        value: die2Value,
        face: die2Face,
      },
      isRolling: true,
    });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="RollDice">
        <div className="Dice">
          <Die face1={this.state.die1.face} rolling={this.state.isRolling} />
          <Die face2={this.state.die2.face} rolling={this.state.isRolling} />
        </div>

        <button onClick={this.rollDice} disabled={this.state.isRolling}>
          {this.state.isRolling ? "rolling" : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
