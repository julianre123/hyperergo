import React, { useState, useEffect } from "react";
import "./Chart.css";
import { useCart } from "../hooks/UseCart";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, addToCart, clearCart, removeFromCart, decreaseQuantity } =
    useCart();
  const [totalPrice, setTotalPrice] = useState("");
  const mobile = window.innerWidth <= 768 ? true : false;

  useEffect(() => {
    let total = 0;
    cart.map((item) => {
      total += item.price * item.quantity;
      return setTotalPrice(total.toFixed(2));
    });
  }, [cart]);
  return (
    <div className="container cart">
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <div className="cart__container">
          <div className="cart__items">
            {!mobile && (
              <div className="cart__items__des">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
            )}
            {cart.map((item) => (
              <CartItem
                item={item}
                addToCart={addToCart}
                clearCart={clearCart}
                removeFromCart={removeFromCart}
                decreaseQuantity={decreaseQuantity}
              />
            ))}
          </div>
          <div className="cart__total">
            <div className="cart__items__des cart__total__des">
              <h3>Cart totals</h3>
            </div>
            <div className="total__price">
              <p>Total</p>
              <span>${totalPrice}</span>
            </div>
            <button className="btn cart__btn">Proceed to checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty">
          <div className="no__items">Your cart is currently empty.</div>
          <Link to="/store">
            <button className="btn empty__btn">Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
