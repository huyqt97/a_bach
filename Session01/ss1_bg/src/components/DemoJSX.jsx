import React, { Component } from "react";
import "./DemoJSX.css";

export default class DemoJSX extends Component {
  render() {
    let people = "Nguyễn Quang Huy";
    let objUser = {
      id: 1,
      name: "Anh Bách",
      age: 18,
      title: "Anh bách cọp",
    };
    return (
      <div style={{ backgroundColor: "greenyellow" }} className="infor">
        <h1>DemoJSX</h1>
        <div>Tên sinh viên : {people}</div>
        <h2>thông tin user là</h2>
        {/* trong JSX  các sự kiện sẽ được viết theo cameCase viis dụ: onclick => onClick */}
        <div>
          id: {objUser.id} - name: {objUser.name} - age: {objUser.age} - tilte:{" "}
          {objUser.title}
        </div>
        <form action="">
          <label htmlFor="" style={{ color: "red" }}>
            Name:
          </label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="" style={{ color: "red" }}>
            Name:
          </label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="" style={{ color: "red" }}>
            Name:
          </label>
          <br />
          <input type="text" />
          <br />
        </form>
        <img
          src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
          alt="photo"
        />
      </div>
    );
  }
}
