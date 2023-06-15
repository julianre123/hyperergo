import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const CartItem = ({
  item,
  addToCart,
  clearCart,
  removeFromCart,
  decreaseQuantity,
}) => {
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div>
      {!mobile ? (
        <div className="cart__item">
          <img src={item.image} alt="" />
          <p>{item.title}</p>
          <p>${item.price}</p>
          <div className="increase">
            <p onClick={() => decreaseQuantity(item)}>-</p>
            <p>{item.quantity}</p>
            <p onClick={() => addToCart(item)}>+</p>
          </div>
          <p>${(item.price * item.quantity).toFixed(2)}</p>
          <div className="close" onClick={() => removeFromCart(item)}>
            <CloseIcon />
          </div>
        </div>
      ) : (
        <div className="cart__item__mobile">
          <div className="cart__item__mobile__section close__mobile">
            <div className="close__mobile__icon">
              <CloseIcon onClick={() => removeFromCart(item)} />
            </div>
          </div>
          <div className="cart__item__mobile__section image">
            <img src={item.image} alt="" />
          </div>
          <div className="cart__item__mobile__section">
            <span>Product:</span>
            <p>{item.title}</p>
          </div>
          <div className="cart__item__mobile__section">
            <span>Price:</span>
            <p>${item.price}</p>
          </div>
          <div className="cart__item__mobile__section">
            <span>Quantity:</span>
            <div className="increase">
              <p onClick={() => decreaseQuantity(item)}>-</p>
              <p>{item.quantity}</p>
              <p onClick={() => addToCart(item)}>+</p>
            </div>
          </div>
          <div className="cart__item__mobile__section">
            <span>Subtotal:</span>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
