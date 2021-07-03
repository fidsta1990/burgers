import styled from "styled-components";
import { setFlex, setColor, sizes } from "../GlobalStyles/helper";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0;

  h2 {
    margin: 0 0 0.5rem 0;
    color: #363636;
  }
`;

export const Summary = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.p`
  font-weight: bold;
  color: #8a2b06;
`;

export const Amount = styled.p`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: #363636;
`;
export const Actions = styled.p`
  display: flex;
  /* flex-direction: column; */

  flex-direction: row;
  /* @media (min-width: ${sizes.m}) {
  } */
`;

export const CartItemBtn = styled.button`
  font: inherit;
  font-weight: bold;
  font-size: 2.4rem;
  color: ${setColor.danger};
  border: 1px solid ${setColor.danger};
  width: 10rem;
  text-align: center;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 1.6rem;
  margin: 0.5rem;

  &:hover,
  &:active {
    background-color: ${setColor.danger};
    color: white;
  }

  &:nth-of-type(2) {
    margin-left: 2rem;
  }

  @media (max-width: ${sizes.m}) {
    font-size: 1.6rem;
  }
`;

export const SubmittingStatusWrapper = styled.section`
  min-height: 70vh;
  ${setFlex};
`;
export const SubmittingStatusText = styled.h2`
  color: ${setColor.danger};
  text-shadow: 0 2px 2px ${setColor.mainDark};
`;
