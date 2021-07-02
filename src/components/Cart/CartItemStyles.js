import styled from "styled-components";
import { setColor, sizes } from "../GlobalStyles/helper";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${setColor.danger};
  padding: 1rem 0;
  margin: 1rem 0;

  h2 {
    margin: 0 0 1.6rem 0;
    color: ${setColor.danger};
    text-shadow: 0 2px 2px ${setColor.mainDark};
  }
`;

export const Summary = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
  font-weight: bold;
  color: ${setColor.mainDark};
  font-size: 1.6rem;
`;

export const Amount = styled.span`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.5rem 0.9rem;
  border-radius: 6px;
  color: ${setColor.danger};
`;
export const Actions = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${sizes.m}) {
    flex-direction: row;
  }
`;

export const CartItemBtn = styled.button`
  font: inherit;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${setColor.danger};
  border: 1px solid ${setColor.danger};
  width: 3rem;
  text-align: center;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 1rem;
  margin: 0.25rem;

  &:hover,
  &:active {
    background-color: ${setColor.mainDark};
    color: white;
  }
`;
