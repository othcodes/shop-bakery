import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../services/api";
import './Header.scss';

const Header = () => {
  const logOut = () => {
    localStorage.removeItem("x-access-token");
  };

  const auth = isAuthenticated();

  return (
    <div className="navigation">

      <Link to="/" type="button" className="btn btn-sm">
        Products
      </Link>
      <Link to="/cart" type="button" className="btn btn-sm">
        Cart
      </Link>
      {auth ? (
          <Link className="btn btn-sm" to="/order">
            Checkout
          </Link>
      ) : (
        ""
      )}
      {auth ? (
        <a className="btn btn-sm" href="/" onClick={logOut}>
          Logout
        </a>
      ) : (
        <Link className="btn btn-sm" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Header;
