import React , {useEffect} from "react";
import {
  Wrapper,
  Container,
  ProfileImg,
  Content,
  AboutCard,
  ContainerTwo,
  ContentTwo,
  ContainerThree,
} from "./styles/AboutStyles.js";
import profile from "../assets/profile.jpg";
import Title from "../components/UI/Title";
import orderImg from "../assets/mainThree.png";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true, delay: 200, easing: "ease-in-out" });
  }, []);

  return (
    <Wrapper>
      <Container
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        <ProfileImg>
          <img src={profile} alt="spicy harry" />
        </ProfileImg>
        <Content>
          <Title>The Owner</Title>
          <p>
            Harry Tindall aka <span>Spicy Harry</span> here. I'm a burger
            enthusiast by trade and I've got a general passion for this thing
            called life. This passion always finds its way into my work. I've
            been in the business of eating, sourcing and studying all these
            beef.
          </p>
          <p>
            I have dedicated my life to burgers. My team and I are on a mission
            to putting smiles on the faces of all of you, our clients. We aim to
            provide the best quality organically grass fed meat. Come on down to
            any of our local spots for a taste of spicy heaven.
          </p>
        </Content>
      </Container>
      <ContainerTwo
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-duration="1000"
      >
        <ContentTwo>
          <Title>Our Heritage</Title>
          <p>
            We serve the beer, wine and cocktails in our cozy bar. With its high
            ceilings and romantic ambiance, the restaurant overlooks the water.
            This magnificent setting is perfect for large and small group meals.
            We offer three choices for our wine menu: group meals. We offer
            three choices for our wine menu:
          </p>
          <Link to="/menu">
            <Button>Check Our Menu</Button>
          </Link>
        </ContentTwo>
        <AboutCard>
          <img src={orderImg} alt="order" />
        </AboutCard>
      </ContainerTwo>
      <ContainerThree
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-duration="1000"
      >
        <Title>Here We Are</Title>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5045.408089243005!2d-0.14688008303032063!3d51.51417176941255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760555bfb2ea13%3A0xaa6b6f97d5300ba7!2sNeat%20Burger!5e0!3m2!1sen!2suk!4v1621543601832!5m2!1sen!2suk"
          width="1920"
          height="600"
          allowFullScreen=""
          loading="lazy"
          title="location of Spicy Burger"
        ></iframe>
      </ContainerThree>
    </Wrapper>
  );
};

export default About;
