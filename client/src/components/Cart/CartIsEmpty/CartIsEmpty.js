import React from "react";
import "./CartIsEmpty.scss";

const CartIsEmpty = () => {
  return (
    <div className="noItemFound">
      <img src="images/empty-cart.png" alt="No Items Found" />
    </div>
  );
};

export default CartIsEmpty;
