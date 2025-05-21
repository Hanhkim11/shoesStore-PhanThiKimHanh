import React from "react";

const CartShop = ({ cart, delProduct, updateQuantity }) => {
  const renderCartItems = () =>
    cart.map((item) => (
      <tr className="fs-4" key={item.id}>
        <td>{item.id}</td>
        <td>
          <img src={item.image} alt={item.name} style={{ height: "70px" }} />
        </td>
        <td>{item.name}</td>
        <td>
          <div className="flex align-items-center">
            <button
              className="btn btn-success"
              onClick={() => {
                updateQuantity(item.id, +1);
              }}
            >
              +
            </button>
            <span className="display-7 mx-2">{item.quantity}</span>
            <button
              className="btn btn-warning"
              onClick={() => {
                updateQuantity(item.id, -1);
              }}
            >
              -
            </button>
          </div>
        </td>
        <td>${item.price}</td>
        <td>${(item.price * item.quantity).toLocaleString()}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              delProduct(item.id);
            }}
          >
            Xóa
          </button>
        </td>
      </tr>
    ));

  return (
    <div>
      <table className="table table-striped text-start">
        <thead>
          <tr className="fs-3">
            <th>Mã Sp</th>
            <th>Hình ảnh</th>
            <th>Tên Sp</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>{renderCartItems()}</tbody>
      </table>
    </div>
  );
};
export default CartShop;
