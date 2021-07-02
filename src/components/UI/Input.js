import React, { forwardRef } from "react";
import styled from "styled-components";
import { setColor, transition, setFlex } from "../GlobalStyles/helper";

const Input = forwardRef((props, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={props.input.id}>{props.label}</Label>
      <Field {...props.input} ref={ref} />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  ${setFlex({ x: "center", y: "center", d: "row" })};
  margin-bottom: 0.8rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 0.8rem;
`;

const Field = styled.input`
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding: 0.8rem;
  padding-left: 0.5rem;
  ${transition};

  &:focus {
    outline: 0;
    border: 1px solid ${setColor.danger};
  }
`;

export default Input;
