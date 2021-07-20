import styled from "styled-components";
import { setFlex, sizes } from "../GlobalStyles/helper";
import { Titles } from "../UI/Title";

export const Wrapper = styled.section`
  padding-top: 4rem;
  padding-bottom: 6rem;
  min-height: 60vh;
  ${setFlex({ x: "space-evenly", y: "center", d: "column" })};
  width: 100%;
  max-width: ${sizes.xl};
`;

export const Titled = styled(Titles)`
  text-align: center;
`;