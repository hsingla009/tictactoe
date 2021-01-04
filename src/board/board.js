import React from "react";
import Square from "./square/square";
class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    moveState: Array(9).fill(Array(9).fill(null)),
    winner: null,
    move: 0,
    moveClicked: 0,
  };
  clickHandler = (id) => {
    this.props.clicked();
    let updatedSquares;
    let updatedMove;
    let updatedWinner = this.state.winner;
    if (this.state.moveClicked === 0) {
      updatedSquares = { ...this.state.squares };
      updatedMove = this.state.move + 1;
    } else {
      updatedSquares = { ...this.state.moveState[this.state.moveClicked] };
      updatedMove = this.state.moveClicked + 2;
      updatedWinner = null;
    }

    updatedSquares[id] = this.props.value;
    const updatedMoveState = { ...this.state.moveState };
    updatedMoveState[updatedMove-1] = updatedSquares;
    // console.log(updatedMoveState);
    this.setState(
      {
        squares: updatedSquares,
        move: updatedMove,
        moveState: updatedMoveState,
        moveClicked: 0,
        winner : updatedWinner
      },
      () => this.checkResult()
    );
    // console.log(this.state.squares);
  };
  checkResult = () => {
    const sq = { ...this.state.squares };
    const tup = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < 8; i++) {
      if (sq[tup[i][0]] === sq[tup[i][1]] && sq[tup[i][1]] === sq[tup[i][2]]) {
        if (sq[tup[i][0]] === "X".toString()) {
          this.setState({ winner: 1 });
        }
        if (sq[tup[i][0]] === "O".toString()) {
          this.setState({ winner: 2 });
        }
      }
    }
  };
  moveClickHandler = (moveNo) => {
    console.log(moveNo);
    let updatedSquares;
    if (moveNo === -1) {
      updatedSquares = Array(9).fill(null);
    } else {
      updatedSquares = { ...this.state.moveState[moveNo] };
    }
    console.log(updatedSquares);
    this.setState({ squares: updatedSquares, moveClicked: moveNo });
  };
  render() {
    const movesArr = Array(this.state.move).fill(null);
    const moves = movesArr.map((val, index) => (
      <div key={index + 1}>
        <button onClick={(moveNo) => this.moveClickHandler((moveNo = index))}>
          {" "}
          go to move {index + 1}
        </button>
      </div>
    ));
    // const squareArr = Array(9).fill(null);
    // const squares = squareArr.map((val, index) => (
    //   <div>
    //     <Square
    //       clicked={(index) => this.clickHandler(index)}
    //       value={this.props.value}
    //       id={index}
    //     />
    //     {(index + 1) % 3 ? "" : <br />}
    //   </div>
    // ));
    const squaresVals = { ...this.state.squares };
    const s0 = squaresVals[0];
    console.log("[board.js] render", squaresVals);
    return (
      <div>
        <div
          style={{
            pointerEvents: this.state.winner ? "none" : "",
            display: "table",
          }}
        >
          {/* {squares} */}
          <Square
            clicked={(id) => this.clickHandler((id = 0))}
            value={squaresVals[0]}
            id="0"
          />
          <Square
            clicked={(id) => this.clickHandler((id = 1))}
            value={squaresVals[1]}
            id="1"
          />
          <Square
            clicked={(id) => this.clickHandler((id = 2))}
            value={squaresVals[2]}
            id="2"
          />
          <br />
          <Square
            clicked={(id) => this.clickHandler((id = 3))}
            value={squaresVals[3]}
            id="3"
          />
          <Square
            clicked={(id) => this.clickHandler((id = 4))}
            value={squaresVals[4]}
            id="4"
          />
          <Square
            clicked={(id) => this.clickHandler((id = 5))}
            value={squaresVals[5]}
            id="5"
          />
          <br />
          <Square
            clicked={(id) => this.clickHandler((id = 6))}
            value={squaresVals[6]}
            id="6"
          />
          <Square
            clicked={(id) => this.clickHandler((id = 7))}
            value={squaresVals[7]}
            id="7"
          />
          <Square
            clicked={(id) => this.clickHandler((id = 8))}
            value={squaresVals[8]}
            id="8"
          />
          {this.state.winner ? <p>player {this.state.winner} Winner</p> : null}
        </div>
        <div>
          <button onClick={(moveNo) => this.moveClickHandler((moveNo = -1))}>
            {" "}
            go to start
          </button>
          <br />
          {moves}
        </div>
      </div>
    );
  }
}

export default Board;
