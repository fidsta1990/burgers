import styled from "styled-components";
import bannerImg from "../../assets/banner.png";
import { setFlex, setColor, sizes } from "../GlobalStyles/helper";

export const Wrapper = styled.section`
  min-height: 50vh;
  width: 100%;
  ${setFlex({ x: "center", y: "center", d: "column" })};
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
    url(${bannerImg}) no-repeat center/cover;
  background-attachment: fixed;
  color: ${setColor.mainWhite};
  text-align: center;
  h3 {
    margin: 1.6rem 0;
  }
  p {
    max-width: 340px;
  }
  .banner-btn {
    button {
      &:hover {
        background: ${setColor.mainWhite};
        color: ${setColor.danger};
      }
    }
  }
  @media (max-width: 740px) {
    height: 90vh;
  }
  @media (min-width: ${sizes.m}) {
    p {
      max-width: 600px;
      line-height: 3.2rem;
    }
  }
`;