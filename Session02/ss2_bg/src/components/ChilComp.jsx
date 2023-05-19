import React, { Component } from "react";

export default class ChilComp extends Component {
  //state là một đối tượng được dùng để lưu trữ giá tị trong component
  // giá trị của state có thẻ thay đổi
  // để khai báo state trong class component => constructor
  // constructor dùng để khai báo lớp và khởi tạo state
  //super là một hàm có sẵn dùng để gọi lớp vừa tạo
  constructor() {
    super();
    //khai báo state
    this.state = {
      studentA: "Hiếu",
      studentb: "Bình",
      answer: "có",
      display: false,
    };
  }
  //Lk1
  // để thay đổi được state => setState
  handleChangeState = () => {
    this.setState({
      answer: "không",
    });
  };
  // LK2
  handleToggleDisplay = () => {
    this.setState({ display: !this.state.display });
  };

  //Lk3
  // cách đặt tên trog lạp trình
  //khi mà sử lý 1 việc gì đó thì sử dụng: handle
  //khi khi sử lý 1 sự kiện sử dung: on
  handleClick01 = (event) => {
    console.log("đây là Click 01", event);
  };
  handleClick02 = (event) => {
    console.log("đây là Click 02", event);
  };
  render() {
    return (
      <div>
        <div>
          tên CTY: {this.props.titleParent} - số tuổi: {this.props.age}{" "}
          innertext : {this.props.chilren}
        </div>
        {/* Lk1 */}
        <h3>Sử dụng state</h3>
        <div>{this.state.studentA} có đẹp troai không?</div>
        <div>câu trả lời : {this.state.answer}</div>
        <button onClick={this.handleChangeState}>Click Me!!!</button>
        {/* Lk2 */}
        <h2>chào mừng bạn đến với thế giới của tôi!!!</h2>
        {/* sử dụng toán tử 3 ngôi */}
        {/* if(điều kiện){
            logic 1
        }else{
            logic 2
        }
        điều kiện ? logic 1 : logic 2
        */}
        {this.state.display ? (
          <div>
            <p>chúc các bạn học tốt</p>
            <button onClick={this.handleToggleDisplay}>show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.handleToggleDisplay}>Read more</button>
          </div>
        )}
        {/* Lk3 */}
        <h2>xử lý sự kiện với button</h2>
        {/* cách 1 là gọi hàm khi render */}
        <button onClick={this.handleClick01("hello 01")}>Click 01</button>
        {/* cách 2  gọi hàm với arow funstion */}
        <button onClick={() => this.handleClick01("hello 02")}>Click 02</button>
      </div>
    );
  }
}
