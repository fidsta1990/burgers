import React from "react";
import { Basket, DesktopBasket, Badge } from "./CartBtnStyles";
import { GiShoppingCart } from "react-icons/gi";
export const CartBtn = (props) => {
  return (
    <Basket onClick={props.onClick}>
      <GiShoppingCart />
      <Badge>0</Badge>
    </Basket>
  );
};

export const DesktopCartBtn = (props) => {
  return (
    <DesktopBasket onClick={props.onClick}>
      <GiShoppingCart />
      <Badge>0</Badge>
    </DesktopBasket>
  );
};

// className="bump"
