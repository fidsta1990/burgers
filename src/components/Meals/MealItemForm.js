import React, { useRef, useState } from "react";
import { Wrapper, FormBtn } from "./MealItemFormStyles";
import Input from "../UI//Input";
const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountValue = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountValue);
  };

  return (
    <Wrapper onSubmit={submitHandler}>
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
        ref={amountInputRef}
      />
      <FormBtn type="submit">+ Add</FormBtn>
    </Wrapper>
  );
};

export default MealItemForm;
