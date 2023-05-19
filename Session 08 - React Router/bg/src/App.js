import "./App.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import NotFound from "./components/NotFound";
import AboutProduct from "./components/Page/AboutProduct";
import AboutUsers from "./components/Page/AboutUsers";
import IndexAbout from "./components/Page/IndexAbout";
import ProductPage from "./components/ProductPage";
import CheckOut from "./components/Page/sign_in/CheckOut";
import Login from "./components/Page/sign_in/Login";
import Course from "./components/Dynamic/Course";
import CourseDetail from "./components/Dynamic/CourseDetail";
import CourseTypeid from "./components/Dynamic/CourseTypeid";

function App() {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "pink" : "black",
    backgroundColor: isActive ? "black" : "pink",
  });
  return (
    <div>
      {/* {/* sử dụng Link */}
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/contact">Contact Page</Link>
        </li>
        <li>
          <Link to="/about">About Page</Link>
          <ul>
            <li>
              <Link to="/about/aboutProduct">About Product</Link>
            </li>
            <li>
              <Link to="/about/aboutUser">About Users</Link>
            </li>
          </ul>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/about" element={<AboutPage />}>
          <Route index element={<IndexAbout />}></Route>
          {/* Nested Router (Định tuyến lồng nhau) */}
          <Route path="aboutProduct" element={<AboutProduct />}></Route>
          <Route path="aboutUser" element={<AboutUsers />}></Route>
        </Route>

        {/* Lưu ý: Để router có path="*" để cuối cùng */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {/* sử dụng NavLink */}
      {/* NavLink và Link giống nhau đều dùng để ánh xạ đến route
      NHƯNG KHI SỬ DỤNG NavLink: thì class sẽ được active */}
      <ul>
        <li>
          <NavLink to="/" style={activeStyle}>
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={activeStyle}>
            Contact Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={activeStyle}>
            About Page
          </NavLink>
          <ul>
            <li>
              <NavLink to="/about/aboutProduct" style={activeStyle}>
                About Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/about/aboutUser" style={activeStyle}>
                About Users
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/checkout">thanh toán đi!!</Link>
        </li>
      </ul>
      <ProductPage></ProductPage>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/about" element={<AboutPage />}>
          <Route index element={<IndexAbout />}></Route>
          {/* Nested Router (Định tuyến lồng nhau) */}
          <Route path="aboutProduct" element={<AboutProduct />}></Route>
          <Route path="aboutUser" element={<AboutUsers />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>

        {/*  */}
        {/* Dynamic router (Quan trọng) */}
        <Route path="/course" element={<Course />}></Route>
        <Route path="/course/:id" element={<CourseDetail />}></Route>
        <Route path="/course/:type/:id" element={<CourseTypeid />}></Route>
        {/*  */}

        {/* Lưu ý: Để router có path="*" để cuối cùng */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
