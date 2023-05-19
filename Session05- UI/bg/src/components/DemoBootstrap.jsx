import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import CardProduct from "./CardProduct";
import DemoAnt from "./DemoAnt";

function DemoBootstrap(props) {
  return (
    <div>
      <Navbar bg="light-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link 18+</Nav.Link>
              <Nav.Link href="#link">Link hoạt hình</Nav.Link>
              <Nav.Link href="#link">Link anime</Nav.Link>
              <Nav.Link href="#link">Link xiếc thú</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="primary">Add product</Button>{" "}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://ongbi.vn/wp-content/uploads/2023/01/ca-phe-sua-da.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://thaotruong.com/wp-content/uploads/2020/02/build-guide-viktor.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  "
            src="https://thaotruong.com/wp-content/uploads/2020/02/build-guide-viktor.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="listProduct">
        <CardProduct
          img={
            "https://img.docbao.vn/images/fullsize/2018/04/30/sao/nene-em-gai-mua-1.png"
          }
          title={"nene"}
          content={"vợ Duy khánh"}
        />
        <CardProduct
          img={"https://i.mydramalist.com/RXmLV_5f.jpg"}
          title={"nene"}
          content={"vợ Duy khánh"}
        />
        <CardProduct
          img={
            "https://img.docbao.vn/images/fullsize/2018/04/30/sao/nene-em-gai-mua-1.png"
          }
          title={"nene"}
          content={"vợ Duy khánh"}
        />
        <CardProduct
          img={
            "https://img.docbao.vn/images/fullsize/2018/04/30/sao/nene-em-gai-mua-1.png"
          }
          title={"nene"}
          content={"vợ Duy khánh"}
        />
        <CardProduct
          img={
            "https://img.docbao.vn/images/fullsize/2018/04/30/sao/nene-em-gai-mua-1.png"
          }
          title={"nene"}
          content={"vợ Duy khánh"}
        />
        <CardProduct
          img={
            "https://img.docbao.vn/images/fullsize/2018/04/30/sao/nene-em-gai-mua-1.png"
          }
          title={"nene"}
          content={"vợ Duy khánh"}
        />
        <CardProduct
          img={
            "https://img.docbao.vn/images/fullsize/2018/04/30/sao/nene-em-gai-mua-1.png"
          }
          title={"nene"}
          content={"vợ Duy khánh"}
        />
        <CardProduct
          img={
            "https://img.docbao.vn/images/fullsize/2018/04/30/sao/nene-em-gai-mua-1.png"
          }
          title={"nene"}
          content={"vợ Duy khánh"}
        />
        <CardProduct
          img={
            "https://img.docbao.vn/images/fullsize/2018/04/30/sao/nene-em-gai-mua-1.png"
          }
          title={"nene"}
          content={"vợ Duy khánh"}
        />
        <CardProduct
          img={
            "https://img.docbao.vn/images/fullsize/2018/04/30/sao/nene-em-gai-mua-1.png"
          }
          title={"nene"}
          content={"vợ Duy khánh"}
        />
        <CardProduct
          img={
            "https://img.docbao.vn/images/fullsize/2018/04/30/sao/nene-em-gai-mua-1.png"
          }
          title={"nene"}
          content={"vợ Duy khánh"}
        />
        <CardProduct
          img={
            "https://img.docbao.vn/images/fullsize/2018/04/30/sao/nene-em-gai-mua-1.png"
          }
          title={"nene"}
          content={"vợ Duy khánh"}
        />
        <CardProduct
          img={
            "https://img.docbao.vn/images/fullsize/2018/04/30/sao/nene-em-gai-mua-1.png"
          }
          title={"nene"}
          content={"vợ Duy khánh"}
        />
      </div>
      <DemoAnt></DemoAnt>
    </div>
  );
}

export default DemoBootstrap;
