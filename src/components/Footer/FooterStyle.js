import styled from "styled-components";
import {
  setColor,
  setGrid,
  sizes,
  letterSpacing,
  setFlex,
  transition,
} from "../GlobalStyles/helper";

export const Wrapper = styled.footer`
  min-height: 50vh;
  padding: 3.2rem;
  width: 100%;
  background: ${setColor.mainDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  .contact {
    width: 100%;
    max-width: 300px;
  }

  .mobile {
    h4 {
      margin-bottom: 0.8rem;
    }

    p:nth-of-type(1) {
      padding: 0.8rem 0;
    }
  }

  @media (max-width: ${sizes.s}) {
    .mobile {
      h4 {
        margin-bottom: 0;
      }

    }
  }

  @media (min-width: ${sizes.s}) {
    display: grid;
    grid-template-columns: 1fr 300px;
    align-content: center;
    max-width: 620px;
  }

  @media (min-width: ${sizes.m}) {
    ${setGrid};
    justify-items: center;
    max-width: 720px;
  }

  @media (min-width: ${sizes.l}) {
    ${setGrid({ no: "3" })};
    max-width: 1200px;
  }

  @media (min-width: ${sizes.l}) {
    ${setGrid({ no: "5" })};
  }
`;

export const Wrap = styled.article`
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

export const Social = styled.div`
  ${setFlex({ x: "space-between", y: "center", d: "row" })};
  width: 100%;
  font-size: 2.4rem;
  padding-top: 0.2rem;
  a {
    color: ${setColor.mainWhite};
    ${transition};
    &:hover {
      color: ${setColor.danger};
    }
  }
`;
