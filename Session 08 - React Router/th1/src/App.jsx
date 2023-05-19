import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const styleT = ({ isActive }) => ({
    backgroundColor: isActive ? "red" : "transparent",
  });
  return (
    <>
      <nav className="nav">
        <img
          src="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d.jpg"
          alt=""
        />
        <ul>
          <li>
            <NavLink to="/" style={styleT}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={styleT}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/protfolio" style={styleT}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={styleT}>
              Prortfolio
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/protfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  );
}

export default App;
