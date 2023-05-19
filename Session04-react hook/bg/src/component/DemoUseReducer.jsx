import React, { useReducer, useState } from "react";

function DemoUseReducer() {
  //useReducer được cung cấp như một giải pháp thay thế cho useState
  //useState thường được sử dụng trog các bài toán đơn giản
  //useReducer thường đực sử dụng trong các dự án

  //VD:
  //useState:
  //   const [count, setCount] = useState(0);
  //   initState: 0
  //   action: setCount(count + 1) và setCount(count - 1)

  //   useReducer:
  //   initState: 0
  //   action: setCount(count + 1) và setCount(count - 1)
  //   reducer
  //   Dispatch

  //B1: khởi tạo giá trị ban đầu
  const initState = 0;
  //B2: tạo action
  const UP_ACTION = "UP";
  const DOWN_ACTION = "DOWN";
  const RANDOM_ACTION = "RANDOM";
  //B3: Reducer nhận vào 2 tham số : 1 là State hiện tại, 2 là action
  const reducer = (state, action) => {
    switch (action) {
      case UP_ACTION:
        return Number(state) + 1;
      case DOWN_ACTION:
        return Number(state) - 1;
      case RANDOM_ACTION:
        return (state += Math.floor(Math.random() * 10).toString());
      default:
        throw new Error("Invalid Action");
    }
  };
  //B4: Dispatch
  //Dispatch sẽ thay thế cho setCount
  // useReducer có thể nhận vào 3 tham số:
  //tham số 1: là reducer
  //tham số 2: là giá trị khởi tạo
  //initState là giá trị khởi tạo sẽ được gán vào state(count)
  //khi component được chạy sẽ chạy đến useReducer nhưng sẽ chưa chạy reducer
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h2>useReducer</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(RANDOM_ACTION)}>Add</button>
    </div>
  );
}

export default DemoUseReducer;
