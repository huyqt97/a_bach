import React, { useState } from "react";

function DemoUserState() {
  //   const [state, setState] = useState("ỂTRRTR");
  //   console.log(state);
  //   // trong class: this.state = {count: 10}
  //   // trong useState:
  //   // state: sẽ nhận giá trị khởi tạo ban đầu
  //   // setState: là một hàm (fn) dùng để set lại giá trị state
  //   //useState(initialState): là giá trị khởi tạo

  //kiểu dữ liệu
  // kiểu dữ liệu nguyên thủy
  //Number
  const [count, setCount] = useState(10);
  //string
  const [text, setText] = useState("hello");
  console.log(count);
  const handleChange = () => {
    setText("hiếu máy dập Cà Mâu!");
  };
  //kiểu dữ liệu phức tạp
  // array
  const [arrNumber, setArrNumber] = useState([1, 2, 3, 4]);
  const handleAddRandom = () => {
    setArrNumber([...arrNumber, Math.floor(Math.random() * 10)]);
  };
  //object
  const [objList, setObjectList] = useState({
    countObj: 10,
    arrObj: [1, 2, 3, 4, 5],
  });
  const handleAddObj = () => {
    setObjectList({
      countObj: objList.countObj,
      arrObj: [...objList.arrObj, Math.floor(Math.random() * 10)],
    });
  };
  return (
    <div>
      <h2>Demo userState</h2>
      {/* kiểu dữ liệu number */}
      <h4>kiểu dữ liệu number</h4>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>Down</button>
      {/* kiểu dữ liệu string */}
      <h4>kiểu dữ liệu string</h4>
      <p>{text}</p>
      <button onClick={handleChange}>change</button>
      {/* kiểu dữ liệu array */}
      <h4>kiểu dữ liệu array</h4>
      <p>{arrNumber.toString()}</p>
      <button onClick={handleAddRandom}>Add random Number</button>
      {/* kiểu giữ liệu object */}
      <h4>kiểu giữ liệu object</h4>
      <button
        onClick={() =>
          setObjectList({
            countObj: objList.countObj + 1,
            arrObj: objList.arrObj,
          })
        }
      >
        Up
      </button>
      <p>{objList.countObj}</p>
      <button
        onClick={() =>
          setObjectList({
            countObj: objList.countObj - 1,
            arrObj: objList.arrObj,
          })
        }
      >
        Down
      </button>
      <p>{objList.arrObj.toString()}</p>
      <button onClick={handleAddObj}>Add Random</button>
    </div>
  );
}

export default DemoUserState;
