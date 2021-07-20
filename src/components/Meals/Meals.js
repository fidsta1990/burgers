import React from "react";
import AvailableMeals from "./AvailableMeals";
import styled from "styled-components";
import { sizes } from "../GlobalStyles/helper";
import design from "../../assets/design.png";

const Meals = () => {
  return (
    <Wrapper>
      <AvailableMeals />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  max-width: 600px;
  min-height: 90vh;
  margin: auto;
  background: url(${design}) no-repeat center/cover;

  @media (max-width: ${sizes.m}) {
    margin: 2.4rem auto;
  }
`;

export default Meals;
