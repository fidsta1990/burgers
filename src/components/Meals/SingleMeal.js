import React from "react";
import { useCartContext } from "../../store/CartProvider";
import MealItemForm from "./MealItemForm";
import { Wrapper, InfoWrapper } from "./SingleMealStyles";

const SingleMeal = ({ id: mainID, name, price, img }) => {
  const { addItem } = useCartContext();
  const pricing = `£${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    return addItem({
      id: mainID,
      name,
      amount,
      price,
    });
  };

  return (
    <Wrapper>
      <InfoWrapper>
        <img src={img} alt={name} />
        <div className="item-info">
          <h5>{name}</h5>
          <p>{pricing}</p>
        </div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </InfoWrapper>
      
    </Wrapper>
  );
};

export default SingleMeal;
