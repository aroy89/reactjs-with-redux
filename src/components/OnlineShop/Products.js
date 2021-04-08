import React from "react";
import { connect } from "react-redux";
import { getOnlineShopList } from "../Redux/Selectors";
import { addToCart } from "../Redux/Actions/Actions";
import "../../css/eshop.css";

const mapStateToProps = (state) => {
  const cartItems = getOnlineShopList(state);
  return { cartItems };
};

const Products = ({ item, addToCart, cartItems }) => {
  const handleAddToCart = (id) => {
    cartItems.indexOf(id) === -1
      ? addToCart(id)
      : alert(`Sorry! The product ${item.name} is already there in your cart!`);
  };

  return (
    <div className="col">
      <div className="card">
        <div className="container">
          <p className="product-name">
            <b>{item.name}</b>
          </p>
          <p className="product-id">
            <small>Product ID: {item.productId}</small>
          </p>
          <img src={item.imageUrl} className="product-img" alt="Photo1" />
          <p className="price-tag"> Price: {item.price}</p>
          <p className="offer-price-tag">{item.offerPrice}</p>
          <button
            className="add-cart"
            onClick={() => handleAddToCart(item.productId)}
          >
            Add Cart
          </button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, { addToCart })(Products);
