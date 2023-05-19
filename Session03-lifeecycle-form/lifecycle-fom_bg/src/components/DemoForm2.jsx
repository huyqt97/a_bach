import React, { Component } from "react";

export default class DemoForm2 extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      age: "",
      curse: "",
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tên sinh viên là :${this.state.fullName} 
            tuổi : ${this.state.age}
            Khóa học : ${this.state.curse}`);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h2>xử lý form với nhiều input</h2>
          <label htmlFor="">Tên sinh viên</label>
          <input
            type="text"
            name="fullName"
            onChange={this.handleChange}
            value={this.state.fullName}
          />
          <br />
          <label htmlFor="">Tuổi</label>
          <input
            type="text"
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <br />
          <label htmlFor="">khóa học</label>
          <select
            onChange={this.handleChange}
            value={this.state.curse}
            name="curse"
          >
            <option value="">-chọn-</option>
            <option value="ReactJS">ReactJS</option>
            <option value="HTML">HTML</option>
            <option value="JS">JS</option>
            <option value="Css">Css</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
