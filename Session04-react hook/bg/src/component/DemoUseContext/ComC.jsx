import React, { useContext } from "react";
import { themeComtext } from "./DemoUseContext";

function ComC(props) {
  const theme = useContext(themeComtext);
  return (
    <div className={theme}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste deserunt
        nemo maiores placeat amet repellendus quis aliquam perferendis voluptate
        magnam delectus deleniti corrupti iusto architecto ullam fugit itaque,
        inventore ipsam nulla molestiae nam error obcaecati. Expedita labore
        accusamus excepturi porro.
      </p>
    </div>
  );
}

export default ComC;
