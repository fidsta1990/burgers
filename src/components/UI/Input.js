import React from "react";
import styled from "styled-components";
import { setColor, transition, setFlex } from "../GlobalStyles/helper";

const Input = (props) => {
  return (
    <Wrapper>
      <Label htmlFor={props.input.id}>{props.label}</Label>
      <Field {...props.input} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${setFlex({ x: "center", y: "center", d: "row" })};
  margin-bottom: 0.8rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: .8rem;
`;

const Field = styled.input`
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding: .8rem;
  padding-left: 0.5rem;
  ${transition};

  &:focus {
    outline: 0;
    border: 1px solid ${setColor.danger};
  }
`;

export default Input;
