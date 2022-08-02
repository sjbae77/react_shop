import "./App.css";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import data from "./data.js";
import Header from "./components/Header";
import Item from "./components/Item";
import Detail from "./pages/Detail";
import About from "./pages/About";

function App() {
  const path = process.env.PUBLIC_URL;
  const [Shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Header />
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

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>지도표시</div>}></Route>
        </Route>

        <Route path="*" element={<div>없는 페이지입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;
