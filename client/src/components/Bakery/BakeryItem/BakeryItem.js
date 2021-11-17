import React, { useState } from "react";
import "./BakeryItem.scss";

const BakeryItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleInputChange = (event) => {
    setQuantity(event.target.value);
  };

  const addToCart = () => {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};
    let id = product.id.toString();
    // Get how much the item was added to the cart
    cart[id] = cart[id] ? cart[id] : 0;
    let updatedQuantity = cart[id] + parseInt(quantity);
    if (product.stock < updatedQuantity) {
      cart[id] = product.stock;
    } else {
      cart[id] = updatedQuantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <li
        className={`bakeryItem ${product.stock === 0 ? "stockIsDown" : ""} p-1`}
      >
        <div className='media align-items-lg-center flex-column flex-lg-row pt-3 pb-3'>
          <img
            src={product.image}
            alt='Bakery Product'
            width='40'
            className='order-lg-1'
          />
          <div className='media-body order-2 ml-3'>
            <h6 className='mt-0 font-weight-bold mb-2'>{product.name}</h6>
            <p className='font-italic mb-0 small'>{product.stock} available</p>
            <span className='my-2 text-secondary font-italic small'>
              $
              {quantity > 0
                ? (product.price * quantity).toFixed(1)
                : product.price.toFixed(1)}
            </span>
          </div>
          <div className='order-3 ml-3'>
            <div className='mt-0 mb-2'>
              <input
                className='quantityValue'
                type='text'
                value={quantity}
                name='quantity'
                readOnly='readOnly'
                onChange={handleInputChange}
              />
              <button
                className='buttonQuantity'
                onClick={decreaseQuantity}
                disabled={quantity === 0 ? "disabled" : ""}
              >
                -
              </button>
              <button
                className='buttonQuantity'
                onClick={increaseQuantity}
                disabled={quantity >= product.stock ? "disabled" : ""}
              >
                +
              </button>
              <button
                className='button button--green'
                disabled={
                  quantity > product.stock || quantity === 0 ? "disabled" : ""
                }
                onClick={addToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default BakeryItem;
