import React, { useState, useEffect } from "react";
import { isAuthenticated, postBakeryCart } from "../../services/api";
import { calculateTotalPrice } from "../../services/calculateTotalPrice";
import { Redirect } from "react-router-dom";
import { postBakeryOrder } from "../../services/api";
import TotalAmount from "../TotalAmount/TotalAmount";
import OrderedItems from "./OrderedItems/OrderedItems";
import OrderActions from "../shared/OrderActions/OrderActions";
import CartIsEmpty from "../Cart/CartIsEmpty/CartIsEmpty";
import Spinner from "../shared/Spinner/Spinner";

const Order = () => {
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

  if (!isAuthenticated()) return <Redirect to="/login" />;

  
  const submitOrder = () => {
    let items = [...products];
    postBakeryOrder(items)
      .then(() => {
        localStorage.removeItem("cart");
        setProducts([]);
        console.log(items);
        // window.location = '/order-received'
      })
      .catch((err) => console.log(err));
  };

  let orderedItems = products.map((product, index) => (
    <OrderedItems product={product} key={index} />
  ));

  let totalAmount = <TotalAmount total={total} />;

  if (products.length === 0) {
    orderedItems = <CartIsEmpty />;
    totalAmount = "";
  }

  return (
    <>
      {loading === false ? (
        <div>
          <ul className="pl-0 pt-0 mb-0" id="ulScrollBar">
            <h4 className="mt-4 ml-0 pl-4 font-weight-bold mb-2">Checkout</h4>
            {orderedItems}
          </ul>
          {totalAmount}
        </div>
      ) : (
        <Spinner />
      )}
      {products.length !== 0 ? (
        <OrderActions
          isCancel={true}
          submittedOrder={submitOrder}
          buttonTitle="Checkout"
          buttonDirection="/order-received"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Order;
