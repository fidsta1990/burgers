import React, { Fragment, useState } from "react";
import {
  Actions,
  CartItemBtn,
  SubmittingStatusText,
  SubmittingStatusWrapper,
} from "./CartStyles";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useCartContext } from "../../store/CartProvider";
import Checkout from "./Checkout";
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { items, totalAmount, addItem, removeItem, clearCart } =
    useCartContext();

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

  const submitOrderHandler = async (userData) => {
    setisSubmitting(true);
    const response = await fetch(
      "https://spiced-burger-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: items,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      setSubmitted(false);
      throw new Error("Something went wrong!");
    }

    setisSubmitting(false);
    setSubmitted(true);
    clearCart();
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

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className="total">
        <span className="totalAmount">Total Amount :</span>
        <span className="price">{totalValue}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart} />
      )}
      {!isCheckout && modalActions}
    </Fragment>
  );

  const isSubmittingModalContent = (
    <SubmittingStatusWrapper>
      <SubmittingStatusText>Sending order details...</SubmittingStatusText>
    </SubmittingStatusWrapper>
  );

  const submittedModalContent = (
    <SubmittingStatusWrapper>
      <SubmittingStatusText>
        Congratulations, order on it's way!
      </SubmittingStatusText>
    </SubmittingStatusWrapper>
  );

  return (
    <Modal onHide={props.onHideCart}>
      {!isSubmitting && !submitted && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && submitted && submittedModalContent}
    </Modal>
  );
};

export default Cart;
