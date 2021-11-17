import React from "react";
import "./TotalAmount.scss";

const TotalAmount = ({ total }) => {
  return (
    <>
      <div className="totalAmount">
        <h5 className="float-left"> Total: </h5>{" "}
        <h5 className="float-right font-weight-bold">${total.toFixed(1)}</h5>
      </div>
    </>
  );
};

export default TotalAmount;
