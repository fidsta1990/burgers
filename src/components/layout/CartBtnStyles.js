import styled, { keyframes } from "styled-components";
import { setColor, sizes } from "../GlobalStyles/helper";

export const Basket = styled.button`
  font-size: 2.3rem;
  background: ${setColor.mainDark};
  border: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  color: ${setColor.mainWhite};
  padding: 1.1rem 2.4rem;
  position: relative;
  margin: 0;
  cursor: pointer;
  span {
    top: 5px;
    right: 15px;
    border-radius: 50%;
    position: absolute;
    font-size: 0.8rem;
    width: 15px;
    height: 15px;
    display: grid;
    place-items: center;
    color: ${setColor.mainDark};
    background: ${setColor.mainWhite};
  }
  &:active {
    transform: scale(0.95);
  }

  @media (min-width: ${sizes.m}) {
    display: none;
  }
`;

export const DesktopBasket = styled.button`
  font-size: 2.3rem;
  background: ${setColor.mainDark};
  border: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  color: ${setColor.mainWhite};
  padding: 1.1rem 2.4rem;
  position: relative;
  margin: 0;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${sizes.m}) {
    display: none;
  }
`;

const bumpAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

export const Badge = styled.span`
  top: 5px;
  right: 15px;
  border-radius: 50%;
  position: absolute;
  font-size: 0.8rem;
  width: 15px;
  height: 15px;
  display: grid;
  place-items: center;
  color: ${setColor.mainDark};
  background: ${setColor.mainWhite};

  &.bump {
    animation: ${bumpAnimation} 300ms ease-out;
    background: ${setColor.danger};
    color: ${setColor.mainWhite};
  }
`;
