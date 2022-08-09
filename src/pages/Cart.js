import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, deleteItem } from "./../redux/cartSlice";

function Cart() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h6>
        {user.name} {user.age}의 장바구니
      </h6>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{cart[i].id}</td>
                <td>{cart[i].name}</td>
                <td>{cart[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(increaseCount(cart[i].id));
                    }}
                  >
                    +
                  </button>
                  <button
                    className="ml10"
                    onClick={() => {
                      dispatch(deleteItem(cart[i].id));
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
