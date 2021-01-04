import React from "react";
import Square from "./square/square";
class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    squareId: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  };
  clickHandler = () => {
    this.props.clicked();

    console.log(this.state.squares);
  };
  checkResult = () => {};
  render() {
    return (
      <div>
        <Square clicked={this.clickHandler} value={this.props.value} id="0" />
        <Square clicked={this.clickHandler} value={this.props.value} id="1" />
        <Square clicked={this.clickHandler} value={this.props.value} id="2" />
        <br />
        <Square clicked={this.clickHandler} value={this.props.value} id="3" />
        <Square clicked={this.clickHandler} value={this.props.value} id="4" />
        <Square clicked={this.clickHandler} value={this.props.value} id="5" />
        <br />
        <Square clicked={this.clickHandler} value={this.props.value} id="6" />
        <Square clicked={this.clickHandler} value={this.props.value} id="7" />
        <Square clicked={this.clickHandler} value={this.props.value} id="8" />
      </div>
    );
  }
}

export default Board;
