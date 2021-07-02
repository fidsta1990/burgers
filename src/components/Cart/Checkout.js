import {
  CheckoutForm,
  ChecoutControl,
  ChecoutLabel,
  ChecoutInput,
  CheckoutActions,
  CheckoutBtn,
} from "./CheckoutStyles";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <CheckoutForm onSubmit={confirmHandler}>
      <ChecoutControl>
        <ChecoutLabel htmlFor="name">Your Name</ChecoutLabel>
        <ChecoutInput type="text" id="name" />
      </ChecoutControl>
      <ChecoutControl>
        <ChecoutLabel htmlFor="street">Street</ChecoutLabel>
        <ChecoutInput type="text" id="street" />
      </ChecoutControl>
      <ChecoutControl>
        <ChecoutLabel htmlFor="postal">Postal Code</ChecoutLabel>
        <ChecoutInput type="text" id="postal" />
      </ChecoutControl>
      <ChecoutControl>
        <ChecoutLabel htmlFor="city">City</ChecoutLabel>
        <ChecoutInput type="text" id="city" />
      </ChecoutControl>
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
