import styled from "styled-components";
import { setFlex, setColor, sizes } from "../GlobalStyles/helper";

export const Wrapper = styled.li`
  width: 100%;
  ${setFlex({ x: "center", y: "space-between", d: "row" })};
  padding: 0.8rem 0;

  img {
    width: 100px;
  }

  .item-info {
    display: flex;
  }

  h5 {
    color: ${setColor.mainDark};
    opacity: 0.9;
  }

  p {
    color: ${setColor.danger};
  }

  @media (max-width: ${sizes.xss}) {
    img {
      width: 80px;
    }

    .item-info {
      flex-direction: column;
      align-items: center;
    }

    &:nth-of-type(3) {
      h5 {
        font-size: 0.7rem;
      }
    }
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
