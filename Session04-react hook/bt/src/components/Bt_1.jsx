// [Bài tập]1. Tạo một ứng dụng đếm số lần click vào nút với React Hook
import React, { useState } from "react";

function Bt_1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>
        Bạn đã Click : {count >= 10 ? <b>{count}</b> : <span>{count}</span>}{" "}
        lần!
      </p>
      <button onClick={() => setCount(count + 1)}>Click để tăng số</button>
    </div>
  );
}

export default Bt_1;
