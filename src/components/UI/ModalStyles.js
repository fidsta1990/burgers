import styled, { keyframes } from "styled-components";
import { setColor, sizes } from "../GlobalStyles/helper";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3.2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 100%;
  max-width: 340px;
  background: ${setColor.mainWhite};
  padding: 1.6rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${slideDown} 300ms ease-out forwards;

  .totalAmount,
  .price {
    font-size: 2.4rem;
  }

  .price {
    margin-left: 1.6rem;
    font-weight: 300;
    color: ${setColor.secondary};
    filter: brightness(86%);
  }

  @media (max-width: 799px) {
    left: calc(50% - 20rem);
    width: 100%;
    max-width: 400px;
  }

  @media (min-width: ${sizes.m}) {
    left: calc(50% - 34rem);
    width: 100%;
    max-width: 680px;
  }

  @media (min-width: ${sizes.l}) {
    left: calc(50% - 36rem);
    width: 100%;
    max-width: 760px;
  }
`;

export const Backdropped = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
