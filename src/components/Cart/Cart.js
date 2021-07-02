import React, { useState } from "react";
import { Actions, CartItemBtn } from "./CartStyles";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useCartContext } from "../../store/CartProvider";
import Checkout from "./Checkout";
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
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

  const orderHandler = () => {
    setIsCheckout(true);
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

  const modalActions = (
    <Actions>
      {hasItems && <CartItemBtn onClick={orderHandler}>Order</CartItemBtn>}
      <CartItemBtn onClick={props.onHideCart}>Close</CartItemBtn>
    </Actions>
  );

  return (
    <Modal onHide={props.onHideCart}>
      {cartItems}
      <div className="total">
        <span className="totalAmount">Total Amount :</span>
        <span className="price">{totalValue}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onHideCart} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
