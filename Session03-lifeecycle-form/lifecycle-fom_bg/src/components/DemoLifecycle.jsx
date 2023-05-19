import React, { Component } from "react";

export default class DemoLifecycle extends Component {
  constructor() {
    super();
    this.state = {
      name: "hiếu",
      count: 1,
    };
    console.log("1. khởi tạo");
  }

  componentWillUnmount() {
    console.log("2. component will mount");
  }
  componentDidMount() {
    console.log("4. component did mount");
  }
  //giai đoạn updating
  componentWillReceiveProps() {
    console.log("5.componentWillReceiveProps");
  }
  shouldComponentUpdate() {
    console.log("6. shouldComponentUpdate");
  }
  componentWillUpdate() {
    console.log("7. componentWillUpdate");
  }
  // hàm này được gọi sau khi component re-render lại
  componentWillMount() {
    console.log("8. componentWillMount");
  }
  componentWillUnmount() {
    console.groupEnd("9.componentWillUnmount");
  }
  render() {
    console.log("3. render");
    return (
      <div>
        <h2>lifecycle</h2>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Up
        </button>
      </div>
    );
  }
}
