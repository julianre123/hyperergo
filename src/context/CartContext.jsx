import { createContext, useReducer, useState } from "react";

//crear context
export const CartContext = createContext();
const initialState = window.localStorage.cart
  ? JSON.parse(window.localStorage.getItem("cart"))
  : [];
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
      updateLocalStorage(newState);
      return newState;
    }
    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    case "CLEAR_CART": {
      updateLocalStorage(newState);
      return initialState;
    }
    case "DECREASE_QUANTITY": {
      const { id } = actionPayload;
      const item = state.findIndex((item) => item.id === id);
      const newState = structuredClone(state);
      if (newState[item].quantity === 1) {
        newState[item].quantity = 1;
        updateLocalStorage(newState);
        return newState;
      } else {
        newState[item].quantity -= 1;
        updateLocalStorage(newState);
        return newState;
      }
    }
  }
  return state;
};
//crear provider
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  const clearCart = (product) =>
    dispatch({
      type: "CLEAR_CART",
      payload: product,
    });
  const decreaseQuantity = (product) =>
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: product,
    });

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
