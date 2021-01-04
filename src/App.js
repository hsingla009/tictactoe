import React from "react";
import "./App.css";
import Board from "./board/board";

class App extends React.Component {
  state = {
    value: "X",
    player: 1,
  };
  clickHandler = () => {
    if (this.state.value.toString() === "X".toString()) {
      this.setState({ value: "O", player: 2 });
    } else {
      this.setState({ value: "X", player: 1 });
    }
  };
  render() {
    return (
      <div>
        <p>Player {this.state.player}</p>
        <Board clicked ={this.clickHandler} value={this.state.value}/>
      </div>
    );
  }
}
export default App;
