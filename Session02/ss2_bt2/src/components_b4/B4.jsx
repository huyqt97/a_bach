import React, { Component } from "react";

export default class B4 extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <table>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Tuổi</th>
          </tr>
          <tr>
            <td>2</td>
            <td>Nguyễn Thị Tâm</td>
            <td>31</td>
          </tr>
        </table>
      </div>
    );
  }
}
