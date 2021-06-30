import React from "react";
import styled from "styled-components";
import {
  setColor,
  sizes,
  letterSpacing,
  setFlex,
} from "../GlobalStyles/helper";

const Card = (props) => {
  return <Wrap className={props.className}>{props.children}</Wrap>;
};

const Wrap = styled.article`
  ${setFlex({ x: "space-evenly", y: "flex-start", d: "column" })};
  padding: 1.6rem;

  h4 {
    color: ${setColor.mainWhite};
    font-weight: 400;
    letter-spacing: ${letterSpacing};
    font-size: 2.4rem;
  }
  p {
    color: ${setColor.mainWhite};
    opacity: 0.85;
  }
`;

export const Created = styled.div`
  max-width: 1200px;
  margin: 2.4rem auto;

  p {
    color: ${setColor.mainWhite};
    text-align: center;
  }

  @media (max-width: ${sizes.s}) {
    p {
      font-size: 1.2rem;
    }
  }
`;

export default Card;
