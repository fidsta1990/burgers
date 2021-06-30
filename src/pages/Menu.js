import React , {useEffect} from "react";
import {
  Wrapper,
  Container,
  MenuImg,
  MenuCard,
  Disclaimer,
  MenuItemWrapper,
} from "./styles/MenuStyles";
import menuImg from "../assets/mainOne.png";
// import MenuItem from "./MenuItem";
import Title from "../components/UI/Title";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = () => {
  // const menu = offerDetails.map((meal) => {
  //   return <MenuItem key={meal.id} {...meal} />;
  // });

  useEffect(() => {
    AOS.init({ duration: 500, once: true, delay: 200, easing: "ease-in-out" });
  }, []);

  return (
    <Wrapper
    data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="800"
    data-aos-duration="1000"
    >
      <Title>Spicy's Menu</Title>
      <Disclaimer>
        All meals come with a complimentary drink of your choice when you spend
        over £25
      </Disclaimer>
      <Container>
        <MenuImg>
          <img src={menuImg} alt="menu" />
        </MenuImg>
        <MenuCard>
          <MenuItemWrapper></MenuItemWrapper>
        </MenuCard>
      </Container>
    </Wrapper>
  );
};

export default Menu;