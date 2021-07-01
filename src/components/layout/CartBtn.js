import React from "react";
import { Basket, DesktopBasket, Badge } from "./CartBtnStyles";
import { GiShoppingCart } from "react-icons/gi";
import { useCartContext } from "../../store/CartProvider";

export const CartBtn = (props) => {
  const { items } = useCartContext();

  const noOfCartItems = items.reduce((currItem, item) => {
    return currItem + item.amount;
  }, 0);

  return (
    <Basket onClick={props.onClick}>
      <GiShoppingCart />
      <Badge>{noOfCartItems}</Badge>
    </Basket>
  );
};

export const DesktopCartBtn = (props) => {
  const { items } = useCartContext();

  const noOfCartItems = items.reduce((currItem, item) => {
    return currItem + item.amount;
  }, 0);

  return (
    <DesktopBasket onClick={props.onClick}>
      <GiShoppingCart />
      <Badge>{noOfCartItems}</Badge>
    </DesktopBasket>
  );
};

// className="bump"
