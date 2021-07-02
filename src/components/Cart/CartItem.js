import React from "react";
import {
  Item,
  Summary,
  Price,
  Amount,
  Actions,
  CartItemBtn,
} from "./CartItemStyles";
const CartItem = ({ id: mainID, price, name, amount, onRemove, onAdd }) => {
  const priced = `$${price.toFixed(2)}`;

  return (
    <Item>
      <div>
        <h2>{name}</h2>
        <Summary>
          <Price>{priced}</Price>
          <Amount>x {amount}</Amount>
        </Summary>
      </div>
      <Actions>
        <CartItemBtn onClick={onAdd}>+</CartItemBtn>
        <CartItemBtn onClick={onRemove}>-</CartItemBtn>
      </Actions>
    </Item>
  );
};

export default CartItem;
