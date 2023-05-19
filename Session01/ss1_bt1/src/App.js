import "./App.css";
import Header from "./components/header/Header";
import Product from "./components/product/Product";
import Section from "./components/section/Section";
import Login from "./components/login/Login";
import Find from "./components/find/Find";
import Info from "./components/info/Info";
import Detail from "./components/detail/Detail";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <>
        <Header></Header>
        <Detail></Detail>
        <section className="products_section">
          <div className="heading_container">
            <h2>New Products In Store</h2>
            <p>Featured Product Just Arrived</p>
          </div>
          <div className="container layout_padding">
            <div className="product_container">
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
            </div>
          </div>
        </section>
        <Find></Find>
        <Section></Section>
        <Login></Login>
        <Info></Info>
        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
