import styled from "styled-components";
import { setColor, transition } from "../GlobalStyles/helper";

export const Wrapper = styled.form`
  text-align: right;
  display: grid;
  width: 50px;
`;

export const FormBtn = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: ${setColor.danger};
  color: white;
  padding: 0.8rem;
  border-radius: 2rem;
  width: 70px;
  font-weight: bold;
  text-align: center;
  ${transition};

  &:hover {
    background-color: ${setColor.mainDark};
  }

  &:active {
    transform: scale(0.95);
  }
`;
