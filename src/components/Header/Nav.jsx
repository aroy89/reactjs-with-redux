import React from "react";
import { connect } from "react-redux";
import { getOnlineShopList } from "../Redux/Selectors";
import NavLink from "./NavLink";
import "../../css/header.css";

function Header({ items }) {
  return (
    <div className="nav">
      <header>
        <ul className="navbar">
          <li className="active">
            <NavLink to="/" className="navlink">
              Home
            </NavLink>
          </li>

          <li className="cart" style={{ float: "right" }}>
            <NavLink className="fa fa-shopping-cart" to="/checkout">
              <span className="cart-count">Cart ({items.length})</span>
            </NavLink>
          </li>
          <li style={{ float: "right" }}>
            <NavLink to="/cart">Online Shop</NavLink>
          </li>
          <li style={{ float: "right" }}>
            <NavLink to="/todo">Todo App</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  const items = getOnlineShopList(state);
  return { items };
};

export default connect(mapStateToProps)(Header);
