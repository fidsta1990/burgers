import React, { useEffect } from "react";
import styled from "styled-components";
import { setColor, sizes } from "../GlobalStyles/helper";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Title = (props) => {
  // useEffect(() => {
  //   AOS.init({ duration: 500, once: true, easing: "ease-in-out" });
  // }, []);

  return (
    <Wrapper
      // data-aos="fade-down"
      // data-aos-offset="200"
      // data-aos-duration="500"
    >
      <Titles>{props.children}</Titles>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1.6rem;
  width: 100%;
  max-width: 400px;

  @media (max-width: ${sizes.m}) {
    max-width: 340px;
  }
`;

export const Titles = styled.h2`
  color: ${setColor.danger};
  text-shadow: 0 2px 2px ${setColor.mainDark};
  text-align: left;

  @media (max-width: ${sizes.m}) {
    text-align: center;
  }
`;

export default Title;
