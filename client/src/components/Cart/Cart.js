import React, { useState, useEffect } from "react";
import { postBakeryCart } from "../../services/api";
import { calculateTotalPrice } from "../../services/calculateTotalPrice";
import CartItem from "./CartItem/CartItem";
import TotalAmount from "../TotalAmount/TotalAmount";
import OrderActions from "../shared/OrderActions/OrderActions";
import CartIsEmpty from "./CartIsEmpty/CartIsEmpty";
import Spinner from "../shared/Spinner/Spinner";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);

    let cart = localStorage.getItem("cart");
    if (!cart) return;

    postBakeryCart(cart).then((products) => {
      let updatedTotalPrice = calculateTotalPrice(total, products);
      setProducts(products);
      setTotal(updatedTotalPrice);
    });
  }, []);

  const removeFromCart = (product) => {
    let updatedProduct = products.filter((p) => p.id !== product.id);
    let cart = JSON.parse(localStorage.getItem("cart"));
    delete cart[product.id.toString()];
    localStorage.setItem("cart", JSON.stringify(cart));
    let updatedTotal = total - product.quantity * product.price;
    setProducts(updatedProduct);
    setTotal(updatedTotal);
  };

  let cartItems = products.map((product, index) => (
    <CartItem product={product} remove={removeFromCart} key={index} />
  ));

  let totalAmount = <TotalAmount total={total} />;

  if (products.length === 0) {
    cartItems = <CartIsEmpty />;
    totalAmount = "";
  }

  return (
    <>
      {loading === false ? (
        <div>
          <ul className="pl-0 pt-0 mb-0" id="ulScrollBar">
            <h4 className="mt-4 ml-0 pl-3 font-weight-bold mb-2">Cart</h4>
            {cartItems}
          </ul>
          {totalAmount}
        </div>
      ) : (
        <Spinner />
      )}
      {products.length !== 0 ? (
        <OrderActions
          isCancel={false}
          buttonTitle="Continue"
          buttonDirection="/order"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
