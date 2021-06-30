import React, { Fragment, useEffect } from "react";
import heroImg from "../../assets/hero.png";
import { BiDonateHeart } from "react-icons/bi";
import { GiHamburger } from "react-icons/gi";
import Button from "../UI/Button";
import * as Heros from "../../pages/styles/HomeStyles";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 0 });
  }, []);

  return (
    <Fragment>
      <Heros.HeroWrapper
        id="home"
        data-aos="fade-up"
      >
        <Heros.HeroContainer>
          <Heros.HeroInfo>
            <h1>Spice Of London</h1>
            <h3>Pepperoni Burger reimagined</h3>
            <p>
              We’re back serving you in more ways, so you can enjoy a choice of
              outdoor and indoor dining, as well as pick up deliveries.
            </p>
            <Heros.HeroIconContainer>
              <p>
                <BiDonateHeart className="hero-icon" />
                <span>480 calories</span>
              </p>
              <p>
                <GiHamburger className="hero-icon" />
                <span>120g Beef</span>
              </p>
            </Heros.HeroIconContainer>
            <Link to="/about" className="hero-btn">
              <Button>Find Out More</Button>
            </Link>
          </Heros.HeroInfo>
          <Heros.HeroImage>
            <img src={heroImg} alt="burger" />
          </Heros.HeroImage>
        </Heros.HeroContainer>
      </Heros.HeroWrapper>
    </Fragment>
  );
};

export default Hero;
