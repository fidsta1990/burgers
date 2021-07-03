import React, { useContext, useReducer } from "react";
import CartContext from "./cartContext";
import reducer from "./reducer";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchCartReducer] = useReducer(
    reducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    return dispatchCartReducer({ type: "ADD", item });
  };
  const removeItemFromCartHandler = (id) => {
    return dispatchCartReducer({ type: "REMOVE", id });
  };

  const clearCartHandler = () => {
    dispatchCartReducer({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
