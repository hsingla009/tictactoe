import React from "react";
import "./square.css";
class Square extends React.Component {
  state = {
    value: null,
    disabled : false
  };
  clickHandler = () => {
    this.props.clicked();
    this.setState({ value: this.props.value,disabled:true });
  };
  render() {
    return (
      <button className="square" onClick={this.clickHandler} disabled={this.state.disabled}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
