import styled from "styled-components";
import {
  setFlex,
  sizes,
  transition,
  shadows,
  setColor,
} from "../../components/GlobalStyles/helper";
import Card from "../../components/UI/Card";

export const Wrapper = styled.section`
  padding: 8.4rem 4rem;
  ${setFlex({ x: "center", y: "center", d: "column" })};
  @media (max-width: ${sizes.s}) {
    max-width: 90vw;
    margin: 0 auto;
    padding: 8.4rem 0;
  }
  h2 {
    text-align: center;
  }
`;

export const Disclaimer = styled.h5`
  color: ${setColor.maindDark};
  opacity: 0.9;
  padding: 2.4rem 0;
  max-width: 600px;
  text-align: center;
  font-weight: 500;
`;

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  ${transition};
  ${setFlex({ x: "space-between", y: "center", d: "row" })};
  flex-wrap: wrap;
  @media (min-width: ${sizes.l}) {
    max-width: 1200px;
    justify-content: center;
  }
`;

export const MenuImg = styled(Card)`
  width: 100%;
  max-width: 600px;
  min-height: 80vh;
  margin: 0 auto;
  display: grid;
  align-self: start;
  place-items: center;
  img {
    ${shadows.dark};
  }
  @media (max-width: ${sizes.xl}) {
    margin-bottom: 2.4rem;
    display: flex;
    order: 2;
  }
  @media (max-width: ${sizes.m}) {
    margin-bottom: 2.4rem;
  }
  @media (max-width: ${sizes.s}) {
    min-height: 60vh;
  }
`;
