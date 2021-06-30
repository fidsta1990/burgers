import styled from "styled-components";
import {
  setFlex,
  sizes,
  setColor,
  transition,
} from "../GlobalStyles/helper";

export const Wrapper = styled.section`
  min-height: 80vh;
  ${setFlex({ x: "center", y: "center", d: "column" })}
  width: 100%;
  max-width: 1200px;
  padding: 8rem 1.6rem 0 0;
  h2,
  h3 {
    text-align: center;
  }
`;

export const Testimonials = styled.article`
  margin: 3.2rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 3.2rem;
  padding: 3.2rem 0;
  justify-items: center;
  /* max-width: 1200px; */
`;

export const Card = styled.div`
  width: 100%;
  max-width: 340px;
  height: auto;
  ${setFlex({ x: "center", y: "center", d: "column" })};
  ${transition};
  .quoteL {
    display: flex;
    font-size: 1.6rem;
    align-items: flex-start;
    color: ${setColor.danger};
  }
  .quoteR {
    display: flex;
    font-size: 1.6rem;
    align-items: flex-end;
    color: ${setColor.danger};
  }
  h4 {
    margin: 1.6rem 0;
    color: ${setColor.danger};
  }
  h5 {
    opacity: 0.6;
  }
  @media (min-width: ${sizes.m}) {
    img {
      max-width: 250px;
    }
  }
  @media (max-width: ${sizes.m}) {
    img {
      max-width: 200px;
    }
  }
`;

export const Description = styled.div`
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  p {
    padding: 0.8rem;
    text-align: center;
  }
`;