// [Bài tập] 2. Tạo một ứng dụng đếm số ký tự trong một đoạn văn bản với React Hook
import React, { useState } from "react";

function Bt_2() {
  const [text, setText] = useState("");
  const [nubText, setNubText] = useState(0);
  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    let newTextArray = newText.split("");
    if (newTextArray[0] !== " ") {
      setNubText(newTextArray.length);
    } else {
      setText("");
    }
  };
  return (
    <div>
      <textarea
        onChange={handleChange}
        value={text}
        cols="30"
        rows="10"
      ></textarea>
      <p>{nubText}</p>
    </div>
  );
}

export default Bt_2;
