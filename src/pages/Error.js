import React from "react";
import styled from "styled-components";
import { setFlex, sizes } from "../components/GlobalStyles/helper";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import Title from "../components/UI/Title";
import SubTitle from "../components/UI/SubTitle";

const NotFound = () => {
  return (
    <Wrapper>
      <Title>Ooops, There seems to be an error.</Title>
      <SubTitle>No Such Page Exists</SubTitle>
      <Link to="/">
        <Button>Back Home</Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 90vh;
  padding: 8.4rem 4rem;
  ${setFlex({ x: "center", y: "center", d: "column" })};

  @media (max-width: ${sizes.s}) {
    max-width: 90vw;
    margin: 0 auto;
    min-height: 100vh;
    padding: 8.4rem 0;
  }

  section:nth-of-type(1),
  section:nth-of-type(2) {
    max-width: 600px;
 
  }

  h2,h3{
    text-align: center;
  }
`;

export default NotFound;
