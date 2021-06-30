import React from "react";
import { Wrapper, Container } from "./styles/ContactStyles";
import Title from "../components/UI/Title";
import SubTitle from "../components/UI/SubTitle";
import Form from '../components/Form/Form'
// import AOS from "aos";
// import "aos/dist/aos.css";

const Contact = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 500, once: true, delay: 200, easing: "ease-in-out" });
  // }, []);

  return (
    <Wrapper>
      <Title
        // data-aos="fade-down"
        // data-aos-offset="200"
        // data-aos-delay="500"
        // data-aos-duration="800"
      >
        Contact Us
      </Title>
      <SubTitle className="sub">We'd love to hear from you</SubTitle>
      <Container>
        <Form/>
      </Container>
    </Wrapper>
  );
};

export default Contact;
