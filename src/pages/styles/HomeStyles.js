import styled from "styled-components";
import {
  setColor,
  setFlex,
  setFont,
  sizes,
} from "../../components/GlobalStyles/helper";

export const Wrapper = styled.section`
  min-height: 100vh;
  ${setFlex({ x: "center", y: "center", d: "column" })}
  position: relative;
  @media (max-width: ${sizes.s}) {
    padding-top: 3rem;
  }
`;

export const HeroWrapper = styled.section`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    min-height: 70vh;
  }
`;

export const Leaf = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 130px;

  img {
    opacity: 0.85;
  }

  @media (max-width: ${sizes.s}) {
    display: none;
  }
`;

export const LeafTwo = styled.div`
  @media (min-width: ${sizes.xl}) {
    z-index: -1;
    position: absolute;
    right: 0;
    top: 130px;
    transform: rotateY(180deg);

    img {
      opacity: 0.85;
    }
  }

  @media (max-width: 1199px) {
    display: none;
  }
`;

export const HeroContainer = styled.section`
  margin-top: 2rem;
  ${setFlex({ x: "center", y: "center", d: "row" })}
  padding: 2rem;

  @media (max-width: ${sizes.s}) {
    ${setFlex({ x: "center", y: "center", d: "column" })}
  }
`;

export const HeroInfo = styled.div`
  text-align: center;
  flex: 1;

  h1 {
    color: ${setColor.danger};
    text-shadow: 0 2px 2px ${setColor.mainDark};
  }

  h3 {
    padding: 1.6rem 0;
    font-weight: 500;
    text-shadow: 0 1px 2px ${setColor.danger};
  }

  p {
    ${setFont.titled};
  }

  .hero-btn {
    width: 100%;
    max-width: 250px;
    display: flex;
    justify-content: flex-start;

    button {
      margin: 0;
      margin-top: 2.4rem;
    }
  }

  @media (max-width: 740px) {
    .hero-btn {
      justify-content: flex-end;
      max-width: 270px;
    }
  }

  @media (max-width: ${sizes.s}) {
    .hero-btn {
      width: 100%;
      max-width: 240px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: ${sizes.m}) {
    max-width: 600px;
    text-align: center;
    h1,
    h3,
    p {
      text-align: left;
    }

    h3 {
      font-size: 2.4rem;
    }
  }
`;

export const HeroIconContainer = styled.article`
  ${setFlex({ x: "space-evenly", y: "center", d: "row" })}
  padding: 1.6rem;

  .hero-icon {
    font-size: 2.4rem;
    margin-right: 0.8rem;
  }

  @media (min-width: ${sizes.m}) {
    ${setFlex({ x: "flex-start", y: "center", d: "row" })}

    p {
      padding: 0.8rem;
      font-size: 1.6rem;
      &:nth-of-type(2) {
        margin-left: 3.2rem;
      }
    }
  }
`;

export const HeroImage = styled.div`
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  flex: 1;

  @media (max-width: ${sizes.xs}) {
    padding-top: 3.2rem;
  }

  @media (min-width: ${sizes.m}) {
    max-width: 600px;
  }
`;
