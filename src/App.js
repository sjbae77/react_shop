import "./App.css";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import data from "./data.js";
import Item from "./components/Item";
import Detail from "./components/Detail";

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

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {Shoes.map((a, i) => {
                    return (
                      <Item path={path} Shoes={Shoes[i]} idx={i} key={i} />
                    );
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
