import React, { Component } from "react";

export default class B3 extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      text2: "",
    };
  }
  handleChange = (e) => {
    this.setState({ text2: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ text: e.target.children[1].value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Nhập nội dung: </label>
          <input type="text" onChange={this.handleChange} />
          <button className="btn" onClick={this.handleClick}>
            xem
          </button>
        </form>
        <p>{this.state.text2}</p>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
