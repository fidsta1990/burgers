import React from "react";
import MealItemForm from "./MealItemForm";
import { Wrapper, InfoWrapper } from "./SingleMealStyles";

const SingleMeal = ({ name, price, img }) => {
  const pricing = `£${price.toFixed(2)}`;

  return (
    <Wrapper>
      <InfoWrapper>
        <img src={img} alt={name} />
        <h5>{name}</h5>
        <p>{pricing}</p>
        <MealItemForm />
      </InfoWrapper>
    </Wrapper>
  );
};

export default SingleMeal;
