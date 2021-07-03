import React, { useRef, useState } from "react";
import {
  CheckoutForm,
  CheckoutControl,
  CheckoutLabel,
  CheckoutInput,
  CheckoutActions,
  CheckoutBtn,
} from "./CheckoutStyles";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    country: true,
    postal: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();
  const postalInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredCountryIsValid = !isEmpty(enteredCountry);
    const enteredPostalIsValid = isFiveChars(enteredPostal);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      country: enteredCountryIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredCountryIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      country: enteredCountry,
      postal: enteredPostal,
    });
  };

  return (
    <CheckoutForm onSubmit={confirmHandler}>
      <h2>Checkout</h2>
      <CheckoutControl>
        <CheckoutLabel htmlFor="name">Your Name</CheckoutLabel>
        <CheckoutInput type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </CheckoutControl>
      <CheckoutControl>
        <CheckoutLabel htmlFor="street">Street</CheckoutLabel>
        <CheckoutInput type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </CheckoutControl>
      <CheckoutControl>
        <CheckoutLabel htmlFor="city">City</CheckoutLabel>
        <CheckoutInput type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </CheckoutControl>
      <CheckoutControl>
        <CheckoutLabel htmlFor="country">Country</CheckoutLabel>
        <CheckoutInput type="text" id="country" ref={countryInputRef} />
        {!formInputsValidity.country && <p>Please enter a valid country!</p>}
      </CheckoutControl>
      <CheckoutControl>
        <CheckoutLabel htmlFor="postal">Postal Code</CheckoutLabel>
        <CheckoutInput type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postal && <p>Please enter a valid postal code!</p>}
      </CheckoutControl>
      <CheckoutActions>
        <CheckoutBtn type="button" onClick={props.onCancel}>
          Cancel
        </CheckoutBtn>
        <CheckoutBtn>Confirm</CheckoutBtn>
      </CheckoutActions>
    </CheckoutForm>
  );
};

export default Checkout;
