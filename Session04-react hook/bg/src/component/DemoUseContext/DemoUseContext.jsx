import React, { createContext, useState } from "react";
import ComC from "./ComC";
// import ComB from "./ComB";

//tao ngữ cảnh
export const themeComtext = createContext();

function DemoUseContext() {
  // DemoUseContext => ComB => ComC
  const [theme, setTheme] = useState();
  const handleToggleChange = () => {
    setTheme(theme == "light" ? "dark" : "light");
    // console.log(theme);
  };
  return (
    <div>
      {/* <button onClick={handleToggleChange}>Click Me!!!</button>
      <ComB themeProps={theme} /> */}
      <themeComtext.Provider value={theme}>
        <button onClick={handleToggleChange}>Click Me!!!</button>
        <ComC></ComC>
      </themeComtext.Provider>
    </div>
  );
}

export default DemoUseContext;
