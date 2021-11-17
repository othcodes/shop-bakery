import React, { useEffect, useState } from "react";
import ProductItem from "./BakeryItem/BakeryItem";
import { getBakeryProducts } from "../../services/api";
import OrderActions from "../shared/OrderActions/OrderActions";
import Spinner from "../shared/Spinner/Spinner";

const Bakery = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    getBakeryProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <>
      {loading === false ? (
        <ul className='pl-0 pt-0 mb-0' id='ulScrollBar'>
          <h4 className='mt-4 ml-0 pl-3 font-weight-bold mb-2'>My Order</h4>
          <div className='ListItems'>
            {products.map((product, index) => (
              <ProductItem product={product} key={index} />
            ))}
          </div>
        </ul>
      ) : (
        <Spinner />
      )}
      <OrderActions
        isCancel={false}
        buttonTitle='Order'
        buttonDirection='/order'
      />
    </>
  );
};

export default Bakery;
