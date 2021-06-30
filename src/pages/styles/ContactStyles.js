import styled from "styled-components";
import { setFlex } from "../../components/GlobalStyles/helper";

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6.4rem 2.4rem;
  ${setFlex({ x: "center", y: "center", d: "column" })};

  h2,
  h3 {
    text-align: center;
  }

  section:nth-of-type(2) {
    max-width: 600px;
  }
`;

export const Container = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  ${setFlex({ x: "center", y: "center", d: "column" })};
`;
