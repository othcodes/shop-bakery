import React from "react";

import OrderAction from "./OrderAction/OrderAction";
import "./OrderActions.scss";

const OrderActions = (props) => (
  <div className="orderActions">
    <OrderAction
      cancel={props.isCancel}
      submit={props.submittedOrder}
      title={props.buttonTitle}
      link={props.buttonDirection}
    />
  </div>
);

export default OrderActions;
