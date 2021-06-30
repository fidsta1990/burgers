import React, { useRef, useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import { Wrapper, Group, Input, Label, TextArea, FormBtn } from "./FormStyles";
// import AOS from "aos";
// import "aos/dist/aos.css";

const nameCheck = (value) =>
  value !== "" && value.length > 2 && value.length < 15;
const regex = /^[a-zA-Z][a-zA-Z0-9\-_.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
const emailCheck = (value) => value.match(regex);
const commentCheck = (value) => value !== "" && value.length > 5;

const Form = () => {
  const nameInputRef = useRef();
  const [success, setSuccess] = useState("");

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  // useEffect(() => {
  //   AOS.init({ duration: 500, once: true, delay: 200, easing: "ease-in-out" });
  // }, []);

  const {
    value: nameValue,
    isValid: nameValueIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameValueChangeHandler,
    valueBlurHandler: nameValueBlurHandler,
    resetHandler: nameValueResetHandler,
  } = useForm(nameCheck);

  const {
    value: emailValue,
    isValid: emailValueIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailValueChangeHandler,
    valueBlurHandler: emailValueBlurHandler,
    resetHandler: emailResetHandler,
  } = useForm(emailCheck);

  const {
    value: commentValue,
    isValid: commentIsValid,
    hasError: commentHasError,
    valueChangeHandler: commentValueChangeHandler,
    valueBlurHandler: commentValueBlurHandler,
    resetHandler: commentResetHandler,
  } = useForm(commentCheck);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!nameValueIsValid || !emailValueIsValid || !commentIsValid) return;

    nameValueResetHandler();
    emailResetHandler();
    commentResetHandler();

    if (formIsValid) {
      setSuccess("Submission Successful");
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  let formIsValid = false;

  if (nameValueIsValid && emailValueIsValid && commentIsValid) {
    formIsValid = true;
  }

  const nameClass = nameHasError ? "error" : "success";
  const emailClass = emailHasError ? "error" : "success";
  const commentClass = commentHasError ? "error" : "success";

  return (
    <Wrapper
      onSubmit={formSubmitHandler}
      // data-aos="fade-down"
      // data-aos-offset="200"
      // data-aos-delay="1000"
      // data-aos-duration="1000"
    >
      {<h4 className="complete">{success}</h4>}
      <Group>
        <Label>Name</Label>
        <Input
          ref={nameInputRef}
          placeholder="John Doe"
          type="text"
          value={nameValue}
          onBlur={nameValueBlurHandler}
          onChange={nameValueChangeHandler}
          className={nameClass}
        />
        {nameHasError && (
          <p>Invalid name, must have at least 2 chars and less than 15 chars</p>
        )}
      </Group>
      <Group>
        <Label>Email</Label>
        <Input
          placeholder="spicyburger@gmail.com"
          type="email"
          value={emailValue}
          onBlur={emailValueBlurHandler}
          onChange={emailValueChangeHandler}
          className={emailClass}
        />
        {emailHasError && <p>Please enter a valid email</p>}
      </Group>
      <Group>
        <Label>Comments</Label>
        <TextArea
          placeholder="Hi there..."
          rows="5"
          value={commentValue}
          onBlur={commentValueBlurHandler}
          onChange={commentValueChangeHandler}
          className={commentClass}
        />
        {commentHasError && <p>Comments must have more than 5 characters</p>}
      </Group>
      <FormBtn type="submit">Send</FormBtn>
    </Wrapper>
  );
};

export default Form;