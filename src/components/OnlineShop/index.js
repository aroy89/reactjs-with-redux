import React from "react";

import Products from "./Products";
import { products } from "./OnlineShopDummyData";
import "../../css/eshop.css";

const ShopDashboard = () => {
  return (
    <div className="center">
      <div className="row">
        {products.map((item) => (
          <Products item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopDashboard;
