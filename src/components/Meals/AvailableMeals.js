import React from "react";
import { offerDetails } from "../../utils/offerDetails";
import SingleMeal from "./SingleMeal";
import styled from "styled-components";
import ItemCard from "../UI/ItemCard";
const AvailableMeals = () => {
  const mealsList = offerDetails.map((meal) => (
    <SingleMeal key={meal.id} {...meal} />
  ));

  return (
    <Wrapper>
      <ul>{mealsList}</ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;

  ul {
    width: 100%;
  }
`;

export default AvailableMeals;
