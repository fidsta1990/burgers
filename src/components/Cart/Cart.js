import React from "react";
import {
  Item,
  Summary,
  Price,
  Amount,
  Actions,
  CartItemBtn,
} from "./CartStyles";
import Modal from '../UI/Modal'
const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className="total">
        <span className="totalAmount">Total Amount :</span>
        <span className="price">34.22</span>
      </div>
      <Actions>
        <CartItemBtn>Order</CartItemBtn>
        <CartItemBtn>Close</CartItemBtn>
      </Actions>
    </Modal>
  );
};

export default Cart;
