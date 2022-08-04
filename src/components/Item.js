import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <Col sm={4}>
      <Link to={`/detail/${props.idx}`}>
        <img
          src={`${props.path}/img/item${props.idx}.jpg`}
          width="80%"
          className="mb20"
        />
      </Link>

      <h4>{props.Shoes.title}</h4>
      <p>{props.Shoes.price}원</p>
    </Col>
  );
}

export default Item;
