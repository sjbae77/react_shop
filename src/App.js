import "./App.css";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import data from "./data.js";
import Header from "./components/Header";
import Item from "./components/Item";
import Detail from "./pages/Detail";
import About from "./pages/About";

function App() {
  const path = process.env.PUBLIC_URL;
  const [Shoes, setShoes] = useState(data);
  const [ViewCount, setViewCount] = useState(0);
  const [MoreBtn, setMoreBtn] = useState(true);
  const [Load, setLoad] = useState(false);

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

                    if (ViewCount === 0) {
                      axios
                        .get("https://codingapple1.github.io/shop/data2.json")
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
                    }
                    if (ViewCount === 1) {
                      axios
                        .get("https://codingapple1.github.io/shop/data3.json")
                        .then((result) => {
                          let copy = [...Shoes, ...result.data];
                          setShoes(copy);

                          setLoad(false);

                          setViewCount(ViewCount + 1);
                          setMoreBtn(false);
                        })
                        .catch(() => {
                          setLoad(false);
                          console.log("통신 실패");
                        });
                    }
                  }}
                >
                  더보기
                </button>
              ) : null}
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail Shoes={Shoes} />} />

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
