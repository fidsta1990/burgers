import React from "react";
import * as Homes from "./styles/HomeStyles";
import leafImg from "../assets/plant.png";
import Hero from "../components/Hero/Hero";
import Offers from "../components/Offers/Offers";
import Banner from "../components/Banner/Banner";
import Testimonial from "../components/Testimonials/Testimonial";
import Gallery from "../components/Gallery/Gallery";

const Home = () => {
  return (
    <Homes.Wrapper>
      <Homes.Leaf >
        <img src={leafImg} alt="leaf" />
      </Homes.Leaf>
        <Hero/>
      <Homes.LeafTwo >
        <img src={leafImg} alt="leaf" />
      </Homes.LeafTwo>
        <Offers/>
        <Banner/>
        <Testimonial/>
        <Gallery/>
    </Homes.Wrapper>
  );
};

export default Home;
