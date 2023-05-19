import React, { Component } from "react";
import ChilComp from "./ChilComp";
import FunCump from "./FunCump";

export default class Demo extends Component {
  //props là viết tắt của properties
  // Props là đối tượng dùng để lưu trữ các attribute
  // Props có giá trị không thay đổi
  // và dùng để  giao tiếp  giữa các component với nhau (ví dụ: truyền cha xuống con)
  render() {
    const title = "công ty A";
    return (
      <>
        <ChilComp age={10} titleParent={title}>
          hello
        </ChilComp>
        {/* <FunCump></FunCump> */}
      </>
    );
  }
}
