import styled from "styled-components";
import { setColor, setFlex } from "../GlobalStyles/helper";

export const CheckoutForm = styled.form`
  margin: 1.6rem auto;
  height: 40rem;
  overflow: auto;

  h2 {
    text-align: center;
    color: ${setColor.danger};
    text-shadow: 0 2px 2px ${setColor.mainDark};
    margin: 2.4rem 0;
    padding-bottom: 1.6rem;
  }
`;

export const CheckoutControl = styled.div`
  margin-bottom: 1rem;

  p {
    color: ${setColor.mainDark};
  }

  &:nth-of-type(5) {
    padding-bottom: 3.2rem;
  }
`;
export const CheckoutLabel = styled.label`
  font-weight: 350;
  margin-bottom: 0.5rem;
  display: block;
  font-size: 2.4rem;

  &.invalid {
    color: #ca3e51;
  }
`;
export const CheckoutInput = styled.input`
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 30rem;
  font-size: 1.6rem;

  &.invalid {
    border-color: #aa0b20;
    background-color: #ffeff1;
  }
`;
export const CheckoutActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2.4rem;
`;

export const CheckoutBtn = styled.button`
  font: inherit;
  font-size: 1.6rem;
  color: ${setColor.danger};
  opacity: 0.8;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  padding: 1rem 2.4rem;

  /* &.submit:hover {
    border: 1px solid ${setColor.mainWhite};
    background-color: ${setColor.mainDark};
    color: white;
  }

  &.submit:hover,
  &.submit:active {
    background-color: #7a2706;
  } */

  &:hover,
  &:active {
    background-color: ${setColor.mainDark};
    color: white;
  }
`;
