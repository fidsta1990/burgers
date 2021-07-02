import React, { useEffect } from "react";
import styled from "styled-components";
import { setColor, sizes } from "../GlobalStyles/helper";
import AOS from "aos";
import "aos/dist/aos.css";
const SubTitle = (props) => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true, delay: 200, easing: "ease-in-out" });
  }, []);

  return (
    <Wrapper data-aos="fade-down">
      <Sub>{props.children}</Sub>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1.6rem;
  width: 100%;
  max-width: 500px;

  @media (max-width: ${sizes.m}) {
    max-width: 340px;
  }
`;

const Sub = styled.h3`
  /* padding: 1.6rem 0; */
  font-weight: 500;
  text-shadow: 0 1px 2px ${setColor.danger};
  text-align: left;
  @media (max-width: ${sizes.m}) {
    text-align: center;
  }
`;

export default SubTitle;
