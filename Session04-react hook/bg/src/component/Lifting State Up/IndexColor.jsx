import React from "react";
import { useState } from "react";
import ColorPicker from "./ColorPicker";

function IndexColor() {
  const [color, setColor] = useState("#00000");
  const handleChangeColor = (e) => {
    setColor(e);
  };
  return (
    <div>
      <ColorPicker changeColor={handleChangeColor}></ColorPicker>
      <div
        style={{
          backgroundColor: color,
          width: "100px",
          height: "100px",
          margin: "auto",
          //   backgroundColor: "black",
        }}
      ></div>
    </div>
  );
}

export default IndexColor;
