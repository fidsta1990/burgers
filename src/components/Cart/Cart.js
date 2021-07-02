import React from "react";
import { Actions, CartItemBtn } from "./CartStyles";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useCartContext } from "../../store/CartProvider";
const Cart = (props) => {
  const { items, totalAmount, addItem, removeItem } = useCartContext();

  const totalValue = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    //very important to set amount to add 1
    addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul>
      {items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onHideCart}>
      {cartItems}
      <div className="total">
        <span className="totalAmount">Total Amount :</span>
        <span className="price">{totalValue}</span>
      </div>
      <Actions>
        {hasItems && <CartItemBtn>Order</CartItemBtn>}
        <CartItemBtn onClick={props.onHideCart}>Close</CartItemBtn>
      </Actions>
    </Modal>
  );
};

export default Cart;
