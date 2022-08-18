import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { addItem } from "./../redux/cartSlice";
import { useDispatch } from "react-redux";

function Detail(props) {
  const path = process.env.PUBLIC_URL;
  const { id } = useParams();
  const item = props.Shoes.find((x) => x.id == id);
  const [Event, setEvent] = useState(true);
  const [Count, setCount] = useState(1);
  const [Tab, setTab] = useState(0);
  const [Fade, setFade] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };

    return confirmAction;
  };
  const deleteConfirm = () => navigate("/cart");
  const cancelConfirm = () => {
    return;
  };
  const confirmCart = useConfirm(
    "장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?",
    deleteConfirm,
    cancelConfirm
  );

  useEffect(() => {
    let get_local = localStorage.getItem("watched");

    if (get_local === null) {
      get_local = [];
    } else {
      get_local = JSON.parse(get_local);
    }

    get_local.unshift(item.id);
    get_local = new Set(get_local);
    get_local = Array.from(get_local);
    localStorage.setItem("watched", JSON.stringify(get_local));

    if (get_local.length > 3) {
      get_local.pop();
      localStorage.setItem("watched", JSON.stringify(get_local));
    }

    props.setWatched(get_local);
  }, []);

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
              className="ml10"
              onClick={() => {
                setCount(Count + 1);
              }}
            >
              추가
            </button>
          </div>

          <button
            className="btn btn-danger"
            onClick={() => {
              confirmCart();
              dispatch(
                addItem({ id: item.id, name: item.title, count: Count })
              );
            }}
          >
            주문하기
          </button>
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
