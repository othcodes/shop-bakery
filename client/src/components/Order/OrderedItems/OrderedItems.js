import React from "react";

const OrderedItems = (props) => {
  const { product } = props;
  return (
    <>
      <li>
        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
          <div className="media-body order-2 ml-3">
            <h6 className="mt-0 font-weight-bold mb-2">{product.name}</h6>
            <div>
              <p className="font-italic mb-0 small">Price: ${product.price}</p>
              <p className="font-italic mb-0 small text-info">
                Quantity: {product.quantity}
              </p>
            </div>
          </div>

          <div className="order-3 ml-3">
            <div className="mt-0 mb-2">
              <span className="float-right font-weight-bold">
                ${(product.quantity * product.price).toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default OrderedItems;
