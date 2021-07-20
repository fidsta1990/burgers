import styled from "styled-components";
import {
  setFlex,
  setFont,
  setColor,
  transition,
  sizes,
  shadows,
} from "../GlobalStyles/helper";
import Button from "../UI/Button";

export const Wrapper = styled.form`
  margin: 2rem auto;
  height: auto;
  width: 100%;
  max-width: 540px;
  ${setFlex({ x: "center", y: "center", d: "column" })};
  padding: 2.4rem;
  background: ${setColor.mainDark};
  opacity: 0.98;
  color: ${setColor.mainWhite};
  border-radius: 0.8rem;
  ${transition};
  ${shadows.dark};
  .complete {
    color: limegreen;
  }
  @media (max-width: ${sizes.m}) {
    max-width: 350px;
  }
`;

export const Group = styled.div`
  width: 100%;
  margin: 1.6rem 0;
  p {
    margin: 0;
    margin-top: 1.6rem;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 2.4rem;
  margin: 1.6rem 0;
  @media (max-width: ${sizes.m}) {
    margin: 0rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 2.4rem;
  border: 0;
  padding: 1.6rem 0.8rem;
  ${transition};
  &:focus {
    outline: none;
    border: 4px solid ${setColor.danger};
    box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.3);
  }
  &.success {
    border-color: green;
    background: #fff;
  }
  &.error {
    background: #f49d7b;
    color: ${setColor.mainWhite};
  }
  @media (max-width: ${sizes.m}) {
    font-size: 1.6rem;
    &:focus {
      transition: none;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 0;
  ${setFont.main};
  font-size: 2.4rem;
  padding: 1.6rem 0.8rem;
  ${transition};
  &:focus {
    outline: none;
    border: 4px solid ${setColor.danger};
    ${shadows.light};
  }
  &.success {
    border-color: limegreen;
    background: #fff;
  }
  &.error {
    background: #f49d7b;
    color: ${setColor.mainWhite};
  }
  @media (max-width: ${sizes.m}) {
    font-size: 1.6rem;
    &:focus {
      transition: none;
    }
  }
`;

export const FormBtn = styled(Button)`
  width: 100%;
  text-transform: uppercase;
  &:hover {
    background: ${setColor.mainWhite};
    color: ${setColor.danger};
  }
`;