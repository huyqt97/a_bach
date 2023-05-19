import React, { Component } from "react";

export default class b2 extends Component {
  constructor() {
    super();
    this.state = {
      text: "What your name?",
    };
  }
  handleText = () => {
    this.setState({
      text: "Huy",
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.handleText}>Click Me!!</button>
      </div>
    );
  }
}
