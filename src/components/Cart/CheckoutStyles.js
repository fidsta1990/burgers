import styled from "styled-components";
import { setFlex } from "../GlobalStyles/helper";

export const CheckoutForm = styled.form`
  margin: 1.6rem 0;
  height: 19rem;
  overflow: auto;
`;

export const ChecoutControl = styled.div`
  margin-bottom: 1rem;
`;
export const ChecoutLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;

  &.invalid {
    color: #ca3e51;
  }
`;
export const ChecoutInput = styled.input`
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 24rem;
  max-width: 100%;

  &.invalid {
    border-color: #aa0b20;
    background-color: #ffeff1;
  }
`;
export const CheckoutActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const CheckoutBtn = styled.button`
  font: inherit;
  color: #5a1a01;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  padding: 1rem 2.4rem;

  &.submit:hover {
    border: 1px solid #5a1a01;
    background-color: #5a1a01;
    color: white;
  }

  &.submit:hover,
  &.submit:active {
    background-color: #7a2706;
  }

  &:hover,
  &:active {
    background-color: #ffe6dc;
  }
`;
