import logo from "./logo.svg";
import "./App.css";
import DemoUserState from "./component/DemoUserState";
import DemoUseEffedt from "./component/DemoUseEffedt";
import DemoUseEffectDeps from "./component/DemoUseEffectDeps";
import DemoUseContext from "./component/DemoUseContext/DemoUseContext";
import DemoUseRef from "./component/DemoUseContext/DemoUseRef";
import DemoUseReducer from "./component/DemoUseReducer";
import IndexColor from "./component/Lifting State Up/IndexColor";

function App() {
  return (
    <div className="App">
      {/* <DemoUserState></DemoUserState> */}
      {/* <DemoUseEffedt /> */}
      {/* <DemoUseEffectDeps></DemoUseEffectDeps> */}
      {/* <DemoUseContext /> */}
      {/* <DemoUseRef /> */}
      <DemoUseReducer />
      <IndexColor></IndexColor>
    </div>
  );
}

export default App;
