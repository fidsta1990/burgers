import React, { useEffect, useState } from "react";
import { Basket, DesktopBasket, Badge } from "./CartBtnStyles";
import { GiShoppingCart } from "react-icons/gi";
import { useCartContext } from "../../store/CartProvider";

export const CartBtn = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const { items } = useCartContext();

  const noOfCartItems = items.reduce((currItem, item) => {
    return currItem + item.amount;
  }, 0);

  const btnClasses = `${btnHighlighted ? "bump" : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <Basket onClick={props.onClick}>
      <GiShoppingCart />
      <Badge className={btnClasses}>{noOfCartItems}</Badge>
    </Basket>
  );
};

export const DesktopCartBtn = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const { items } = useCartContext();

  const noOfCartItems = items.reduce((currItem, item) => {
    return currItem + item.amount;
  }, 0);

  const btnClasses = `${btnHighlighted ? "bump" : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <DesktopBasket onClick={props.onClick}>
      <GiShoppingCart />
      <Badge className={btnClasses}>{noOfCartItems}</Badge>
    </DesktopBasket>
  );
};

// className="bump"
