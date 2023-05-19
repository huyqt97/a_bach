// https://docs.google.com/document/d/11rghPa0CLFXlGA-1ac5N6BdmpGzc31S4/edit
import logo from "./logo.svg";
import "./App.css";
import Bt_1 from "./components/Bt_1";
import Bt_2 from "./components/Bt_2";
import Bt_3 from "./components/Bt_3/Bt_3";
import Bth_6 from "./components/Bth_6";

function App() {
  return (
    <div className="App">
      <Bt_1></Bt_1>
      <Bt_2></Bt_2>
      <Bt_3></Bt_3>
      <Bth_6 />
    </div>
  );
}

export default App;
