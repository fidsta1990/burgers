import React from "react";
import styled from "styled-components";
import { setColor, transition, shadows, sizes } from "../GlobalStyles/helper";

const Button = (props) => {
  return (
    <Btn type={props.type} className={props.className} onClick={props.onClick}>
      {props.children}
    </Btn>
  );
};

const Btn = styled.button`
  ${transition};
  background: ${setColor.danger};
  padding: 1.6rem 2.4rem;
  color: ${setColor.mainWhite};
  cursor: pointer;
  border: 0;
  font-size: 2.4rem;
  border-radius: 0.8rem;
  ${shadows.light};
  margin: 1.6rem;
  height: 60px;
  &:hover {
    background: ${setColor.mainDark};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${sizes.m}) {
    font-size: 2.4rem;
  }
`;

export default Button;
