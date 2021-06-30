import { useState } from "react";

const useForm = (validValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => setEnteredValue(e.target.value);

  const valueBlurHandler = () => setIsTouched(true);

  const resetHandler = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    resetHandler,
  };
};

export default useForm;
