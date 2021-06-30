import styled from "styled-components";
import {
  setFlex,
  sizes,
  transition,
  shadows,
  setColor,
} from "../../components/GlobalStyles/helper";
import Card from "../../components/UI/Card";
import design from "../../assets/design.png";

export const Wrapper = styled.section`
  min-height: 90vh;
  padding: 8.4rem 4rem;
  ${setFlex({ x: "center", y: "center", d: "column" })};

  @media (max-width: ${sizes.s}) {
    max-width: 90vw;
    margin: 0 auto;
    min-height: 100vh;
    padding: 8.4rem 0;
  }
`;

export const Container = styled.section`
  width: 100%;
  min-height: 80vh;
  max-width: 1200px;
  margin: 0 auto;
  ${transition};
  ${setFlex({ x: "space-between", y: "center", d: "row" })};
  flex-wrap: wrap;

  @media (min-width: ${sizes.l}) {
    max-width: 1200px;
    justify-content: center;
  }
`;

export const ProfileImg = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  ${shadows.dark};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  ${setFlex({ x: "space-between", y: "flex-start", d: "column" })};

  h2 {
    padding-left: 4.4rem;
  }

  p {
    padding: 1.6rem 0rem 1.6rem;
    max-width: 470px;
    padding-left: 6.4rem;
    font-size: 1.6rem;
    opacity: 0.8;

    span {
      color: ${setColor.danger};
      font-weight: 500;
    }
  }

  @media (min-width: ${sizes.l}) {
    max-width: 500px;
  }

  @media (max-width: 989px) {
    max-width: 600px;
    align-items: center;
    margin: 0 auto;

    h2 {
      padding-left: 0;
    }
    p {
      padding: 1.6rem 0;
    }
  }
`;

export const ContainerTwo = styled(Container)`
  min-height: 100vh;
  padding: 8.4rem 0 3.2rem 0;
`;

export const ContentTwo = styled(Content)`
  p {
    padding-left: 1.6rem;
  }

  h2 {
    padding-left: 0;
  }

  @media (max-width: ${sizes.l}) {
    order: 1;

    h2 {
      text-align: center;
    }

    p {
      padding-left: 0rem;
    }
  }
`;

export const AboutCard = styled(Card)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: url(${design}) no-repeat center/cover;
  display: grid;
  place-items: center;
  img {
    width: 90%;
    ${shadows.dark};
  }
`;

export const ContainerThree = styled(Container)`
  min-height: 80vh;
  padding: 4.8rem 0;
  justify-content: center;

  h2 {
    text-align: center;
  }

  iframe {
    box-shadow: 0 0 5px #ed4e53;
    border: 0;
    margin: 3.2rem 0;
  }
`;
