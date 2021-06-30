import React from "react";
import { Basket, DesktopBasket, Badge } from "./CartBtnStyles";
import { GiShoppingCart } from "react-icons/gi";
export const CartBtn = () => {
  return (
    <Basket>
      <GiShoppingCart />
      <Badge>0</Badge>
    </Basket>
  );
};

export const DesktopCartBtn = () => {
  return (
    <DesktopBasket>
      <GiShoppingCart />
      <Badge>0</Badge>
    </DesktopBasket>
  );
};

// className="bump"
