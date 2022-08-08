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

  useEffect(() => {
    let timer = setTimeout(() => {
      setEvent(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="container">
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

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent Tab={Tab} />
    </div>
  );
}

function TabContent({ Tab }) {
  if (Tab === 0) {
    return <div>내용0</div>;
  }
  if (Tab === 1) {
    return <div>내용1</div>;
  }
  if (Tab === 2) {
    return <div>내용2</div>;
  }
}

export default Detail;
