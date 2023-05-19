import React from "react";

function ColorPicker(props) {
  const handlePickerColor = (e) => {
    props.changeColor(e.target.value);
  };
  return (
    <div>
      <input type="color" onChange={handlePickerColor} />
    </div>
  );
}

export default ColorPicker;
