import React, { Component } from "react";
import "./Bth1.css";

export default class Bth1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      error: null,
      success: false,
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    if (!name || !email || !message) {
      this.setState({
        error: "Họ tên, email và nội dung tin nhắn không được bỏ trống",
      });
    } else {
      this.setState({ success: true });
    }
  };
  render() {
    const { name, email, message, error, success } = this.state;
    return (
      <div>
        {!success ? (
          <form onSubmit={this.handleSubmit}>
            {error && <div className="six">{error}</div>}
            <label>Name : </label>
            <br />
            <input
              type="text"
              onChange={this.handleChange}
              name="name"
              value={name}
            />
            <br />
            <label>Email : </label>
            <br />
            <input
              type="email"
              onChange={this.handleChange}
              name="email"
              value={email}
            />
            <br />
            <label>Tin nhắn : </label>
            <br />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              onChange={this.handleChange}
              value={message}
            ></textarea>
            <button>add</button>
          </form>
        ) : (
          <p>Tin nhắn đã được gửi thành công!</p>
        )}
      </div>
    );
  }
}
