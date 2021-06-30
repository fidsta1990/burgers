import React from "react";
import {
  Item,
  Summary,
  Price,
  Amount,
  Actions,
  CartItemBtn,
} from "./CartStyles";
const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>34.22</span>
      </div>
      <Actions>
        <CartItemBtn>Close</CartItemBtn>
        <CartItemBtn>Order</CartItemBtn>
      </Actions>
    </div>
  );
};

export default Cart;
