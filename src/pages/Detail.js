import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Detail(props) {
  const path = process.env.PUBLIC_URL;
  const { id } = useParams();
  let item = props.Shoes.find((x) => x.id == id);
  const [Event, setEvent] = useState(true);
  const [Count, setCount] = useState(0);
  const [Tab, setTab] = useState(0);
  const [Fade, setFade] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setEvent(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    setFade("end");

    return () => {
      setFade("");
    };
  }, []);

  return (
    <div className={`container start ${Fade}`}>
      {Event ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      <div className="row mt20">
        <div className="col-md-6">
          <img src={`${path}/img/item${item.id}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}원</p>
          <div className="mb20">
            구매수량 : {Count}
            <button
              onClick={() => {
                setCount(Count + 1);
              }}
            >
              추가
            </button>
          </div>

          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0" className="mt20">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            상세보기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            상품후기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            상품문의
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent Tab={Tab} />
    </div>
  );
}

function TabContent({ Tab }) {
  const [Fade, setFade] = useState("");

  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [Tab]);

  return (
    <div className={`start ${Fade}`}>
      {
        [
          <div>상세보기 내용입니다.</div>,
          <div>상품후기 내용입니다.</div>,
          <div>상품문의 내용입니다.</div>,
        ][Tab]
      }
    </div>
  );
}

export default Detail;
