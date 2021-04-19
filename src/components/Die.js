import React from "react";

class Die extends React.Component {
  static defaultProps = {
    die1: "six",
    die2: "six",
  };

  render() {
    return (
      <div>
        <i
          className={`Die fas fa-dice-${this.props.face1}  ${
            this.props.rolling && "rolling"
          }`}
        />
        <i
          className={`Die fas fa-dice-${this.props.face2} ${
            this.props.rolling && "rolling"
          }`}
        />
      </div>
    );
  }
}

export default Die;
