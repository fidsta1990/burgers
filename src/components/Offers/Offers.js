import React, { useEffect } from "react";
import * as Offer from "./OfferStyles";
import OfferCards from "./OfferCards";
import AOS from "aos";
import "aos/dist/aos.css";

const Offers = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true, delay: 200, easing: "ease-in-out" });
  }, []);

  return (
    <Offer.Wrapper>
      <Offer.Titled
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="0"
      >
        Flash Offers
      </Offer.Titled>
      <OfferCards />
    </Offer.Wrapper>
  );
};

export default Offers;
