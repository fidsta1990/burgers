import React from "react";
import { Wrap } from "./FooterStyle";
const Card = (props) => {
  return <Wrap className={props.className}>{props.children}</Wrap>;
};

export default Card;
