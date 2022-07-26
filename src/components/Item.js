import { Col } from "react-bootstrap";

function Item(props) {
  return (
    <Col>
      <img
        src={`${props.path}/img/item${props.idx}.jpg`}
        width="80%"
        className="mb20"
      />
      <h4>{props.Shoes.title}</h4>
      <p>{props.Shoes.price}</p>
    </Col>
  );
}

export default Item;
