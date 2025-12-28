import React, { Component } from "react";

class GolfGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      ballPosition: 0
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 39 && this.state.started) {
      this.setState(prev => ({ ballPosition: prev.ballPosition + 5 }));
    }
  };

  buttonClickHandler = () => {
    this.setState({ started: true });
  };

  renderChoice = () => {
    const { started, ballPosition } = this.state;

    if (!started) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }

    return (
      <div
        className="ball"
        style={{ left: `${ballPosition}px` }}
      ></div>
    );
  };

  render() {
    return (
      <div className="golf-game">
        {this.renderChoice()}
      </div>
    );
  }
}

export default GolfGame;
