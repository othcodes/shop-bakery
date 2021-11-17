import React from "react";

import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
      <div className="container py-5">
        <div className="col-lg-5  mx-auto">
          <div className="bakery">
            <Header />
            <div className="bakeryApp">
              {children}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Layout;
