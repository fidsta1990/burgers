import styled from "styled-components";
import {
  setGrid,
  transition,
  setColor,
  shadows,
  sizes,
  setFlex,
} from "../GlobalStyles/helper";

export const Wrapper = styled.section`
  min-height: 50vh;
  ${transition};
  width: 100%;
  max-width: 1200px;
  padding: 8rem 0;
  ${setFlex({ x: "center", y: "center", d: "column" })};
  h2,
  h3 {
    text-align: center;
  }
  h3 {
    margin-bottom: 4rem;
  }
`;

export const ImageContainer = styled.article`
  ${setGrid};
  width: 100%;
  max-width: 1000px;
  min-height: 40vh;
  margin: 0 auto;
  margin-top: 4rem;
  border-radius: 0.4rem;
  background: ${setColor.danger};
  ${shadows.dark};
  @media (min-width: ${sizes.m}) {
    ${setGrid({ no: "3" })};
    justify-items: center;
    min-height: 31vh;
  }
`;

export const Overlay = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  ${transition};
  width: 100%;
  max-width: 300px;
  height: 200px;
  &:hover .image,
  &:focus .image {
    transform: scale(1.2);
    opacity: 0.8;
  }
  @media (min-width: 801px) {
    max-width: 340px;
    height: 280px;
  }
  @media (max-width: ${sizes.m}) {
    max-width: 400px;
  }
`;

export const Image = styled.div`
  ${transition};
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;