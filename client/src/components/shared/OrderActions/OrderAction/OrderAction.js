import React from "react";
import { Link } from "react-router-dom";

const OrderAction = (props) => {
  
  let cancel = props.cancel ? (
    <Link
      to="/"
      type="button"
      className="buttonOrder buttonOrder--cancel"
    >
      Cancel
    </Link>
  ) : (
    ""
  );

  return (
    <div>
      <Link
        onClick={props.submit}
        to={props.link}
        type="button"
        className="buttonOrder"
      >
        {props.title}
      </Link>
      {cancel}
    </div>
  );
};
export default OrderAction;
