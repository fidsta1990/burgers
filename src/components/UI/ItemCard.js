import React from "react";
import styled from "styled-components";
import { setColor, setFlex } from "../GlobalStyles/helper";
const ItemCard = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.article`
  padding: 1.6rem;

  ${setFlex({ x: "space-between", y: "center", d: "row" })};
`;

export default ItemCard;
