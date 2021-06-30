import styled from "styled-components";
import { setFlex, setColor, sizes } from "../GlobalStyles/helper";

export const Wrapper = styled.li`
  width: 100%;
  ${setFlex({ x: "center", y: "space-between", d: "row" })};
  padding: 0.8rem 0;

  img {
    width: 100px;
  }

  h5 {
    color: ${setColor.mainDark};
    opacity: 0.9;
  }

  p {
    color: ${setColor.danger};
  }
`;

export const InfoWrapper = styled.div`
  ${setFlex({ x: "space-between", y: "center", d: "row" })};
  width: 100%;
  padding: 2.4rem;

  @media (max-width: ${sizes.s}) {
    h5 {
      font-size: 1rem;
    }
  }
`;
