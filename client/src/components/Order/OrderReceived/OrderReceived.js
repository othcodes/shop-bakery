import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../../services/api";
import { Redirect } from "react-router";
import OrderActions from "../../shared/OrderActions/OrderActions";
import Spinner from "../../shared/Spinner/Spinner";
import "./OrderReceived.scss";

const OrderReceived = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  });

  if (!isAuthenticated()) return <Redirect to="/" />;

  return (
    <>
      {loading === false ? (
        <div>
          <h4 className="mt-4 ml-0 pl-4 font-weight-bold mb-0">
            Order Received
          </h4>

          <div className="orderReceived">
            <img src="images/fireworks.png" alt="No Items Found" />
            <h1 className="mt-4 ml-0 pl-4 font-weight-bold mb-2">Thank you!</h1>
            <p className="text-secondary h6">
              We have successfully received your order.
            </p>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
      <OrderActions
        isCancel={false}
        buttonTitle="Submit another order"
        buttonDirection="/"
      />
    </>
  );
};

export default OrderReceived;
