import styled from "styled-components";
import {
  setColor,
  setFlex,
  shadowsT,
  shadows,
  transition,
  sizes,
} from "../GlobalStyles/helper";
import { Link as LinkR } from "react-router-dom";

export const CardWrapper = styled.section`
  width: 100%;
  max-width: ${sizes.xl};
  margin: 1.6rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 4rem;
  padding: 4.8rem 0;
  align-content: center;
  justify-items: center;
  position: relative;
  @media (max-width: ${sizes.s}) {
    gap: 6.4rem;
  }
`;

export const Link = styled(LinkR)`
  font-size: 2.4rem;
  background: ${setColor.mainWhite};
  color: ${setColor.danger};
  border-radius: 1.6rem;
  padding: 0.8rem 1.6rem;
  &:hover {
    color: ${setColor.mainDark};
  }
  @media (max-width: ${sizes.s}) {
    font-size: 1.6rem;
  }
`;

export const CardItem = styled.article`
  width: 100%;
  max-width: 340px;
  height: auto;
  border: 0;
  padding: 1.6rem;
  background: ${setColor.danger};
  ${shadows.dark};
  border-radius: 2.4rem;
  cursor: pointer;
  ${transition};
  ${setFlex({ x: "space-evenly", y: "center", d: "column" })};
  color: ${setColor.mainWhite};
  @media (max-width: 740px) {
    max-width: 300px;
  }
  @media (min-width: ${sizes.m}) {
    &:hover {
      background: ${setColor.mainDark};
      transform: translateY(-20px);
    }
  }
  p {
    font-size: 2.4rem;
  }
  @media (max-width: ${sizes.xs}) {
    max-width: 300px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  max-width: 300px;
  height: 280px;
  @media (min-width: ${sizes.s}) {
  }
  @media (max-width: ${sizes.s}) {
    max-width: 200px;
    height: 200px;
  }
`;

export const Title = styled.h4`
  color: ${setColor.mainWhite};
  ${shadowsT.light};
`;