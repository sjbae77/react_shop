import "./App.css";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import data from "./data.js";
import Header from "./components/Header";
import Item from "./components/Item";
import WatchedItem from "./components/WatchedItem";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Cart from "./pages/Cart";

function App() {
  const path = process.env.PUBLIC_URL;
  const [Shoes, setShoes] = useState(data);
  const [ViewCount, setViewCount] = useState(2);
  const [MoreBtn, setMoreBtn] = useState(true);
  const [Load, setLoad] = useState(false);

  let get_local = JSON.parse(localStorage.getItem("watched"));

  useEffect(() => {
    if (get_local === null) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

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
              {Load ? <p>로딩중입니다.</p> : null}
              {MoreBtn ? (
                <button
                  onClick={() => {
                    setLoad(true);

                    axios
                      .get(
                        `https://codingapple1.github.io/shop/data${ViewCount}.json`
                      )
                      .then((result) => {
                        let copy = [...Shoes, ...result.data];
                        setShoes(copy);

                        setLoad(false);
                        setViewCount(ViewCount + 1);
                      })
                      .catch(() => {
                        setLoad(false);
                        console.log("통신 실패");
                      });

                    if (ViewCount === 3) setMoreBtn(false);
                  }}
                >
                  더보기
                </button>
              ) : null}

              <WatchedItem get_local={get_local} Shoes={Shoes} />
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/cart" element={<Cart />}></Route>

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
