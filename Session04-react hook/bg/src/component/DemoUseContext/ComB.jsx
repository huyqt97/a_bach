import React from "react";
import ComC from "./ComC";

function ComB(props) {
  //   console.log(props.themeProps);
  return (
    <div>
      <ComC themeComC={props.themeProps} />
    </div>
  );
}

export default ComB;
