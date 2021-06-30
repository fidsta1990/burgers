import React from "react";
import { Wrapper, FormBtn } from "./MealItemFormStyles";
import Input from "../UI//Input";
const MealItemForm = (props) => {
  return (
    <Wrapper>
      <Input
        label="Amount"
        input={{
          type: "text",
          id: `amount_${props.id}`,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <FormBtn type="button">+ Add</FormBtn>
    </Wrapper>
  );
};

export default MealItemForm;
