import logo from "./logo.svg";
import "./App.css";
import DemoLifecycle from "./components/DemoLifecycle";
import DemoForm1 from "./components/DemoForm1";
import DemoForm2 from "./components/DemoForm2";

function App() {
  return (
    <div className="App">
      {/* <DemoLifecycle></DemoLifecycle> */}
      <DemoForm1></DemoForm1>
      <DemoForm2 />
    </div>
  );
}

export default App;
