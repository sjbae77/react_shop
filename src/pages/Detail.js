import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  const path = process.env.PUBLIC_URL;
  const { id } = useParams();
  let item = props.Shoes.find((x) => x.id == id);
  const [Event, setEvent] = useState(true);
  const [Count, setCount] = useState(0);

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
    </div>
  );
}

export default Detail;
