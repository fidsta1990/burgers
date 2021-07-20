import React, { useEffect, useState } from "react";
import SingleMeal from "./SingleMeal";
import styled from "styled-components";
import { setColor, setFlex } from "../GlobalStyles/helper";
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBurgers = async () => {
      const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}`);
      if (!response.ok) {
        throw new Error(`Something went wrong!`);
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          desc: responseData[key].desc,
          price: responseData[key].price,
          img: responseData[key].img,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchBurgers().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading)
    return (
      <MealsLoading>
        <h2>Loading...</h2>
      </MealsLoading>
    );

  if (error) {
    return (
      <MealsError>
        <p>{error}</p>
      </MealsError>
    );
  }

  const mealsList = meals.map((meal) => <SingleMeal key={meal.id} {...meal} />);

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

const MealsLoading = styled.section`
  ${setFlex};
  min-height: 100vh;

  h2 {
    ${setColor.mainDark};
  }
`;
const MealsError = styled.section`
  ${setFlex};
  min-height: 100vh;

  h2 {
    ${setColor.danger};
  }
`;

export default AvailableMeals;
