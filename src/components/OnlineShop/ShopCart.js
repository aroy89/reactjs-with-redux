import React from "react";
import { connect } from "react-redux";
import { getCartItems } from "../../components/Redux/Selectors";
import { removeCart } from "../../components/Redux/Actions/Actions";
import "../../css/eshop.css";

const ShopCart = ({ cartItems, removeCart }) => (
  <div className="center margin">
    {cartItems && cartItems.length ? (
      <table className="cart-table">
        <tr>
          <th>Product Name</th>
          <th>Product ID</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
        {cartItems.map((item) => {
          return (
            <tr>
              <td className="cart-table-col">{item.name}</td>
              <td className="cart-table-col">{item.productId}</td>
              <td className="cart-table-col">{item.price}</td>
              <td className="cart-table-col">
                <button
                  className="remove-cart-item"
                  onClick={() => removeCart(item.productId)}
                >
                  Remove Item
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    ) : (
      <div className="empty-cart">
        <h3>Your Cart is Empty!</h3>
      </div>
    )}
  </div>
);

const mapStateToProps = (state) => {
  const cartItems = getCartItems(state);
  return { cartItems };
};

export default connect(mapStateToProps, { removeCart })(ShopCart);
