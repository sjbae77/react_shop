import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";

function App() {
  const path = process.env.PUBLIC_URL;
  const [Shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home">SJ-Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          <Col>
            <img src={`${path}/img/item1.jpg`} width="80%" className="mb20" />
            <h4>{Shoes[0].title}</h4>
            <p>{Shoes[0].price}</p>
          </Col>
          <Col>
            <img src={`${path}/img/item2.jpg`} width="80%" className="mb20" />
            <h4>{Shoes[1].title}</h4>
            <p>{Shoes[1].price}</p>
          </Col>
          <Col>
            <img src={`${path}/img/item3.jpg`} width="80%" className="mb20" />
            <h4>{Shoes[2].title}</h4>
            <p>{Shoes[2].price}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
