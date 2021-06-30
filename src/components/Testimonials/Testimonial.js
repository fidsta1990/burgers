import React, { useEffect } from "react";
import Title from "../UI/Title";
import SubTitle from "../UI/SubTitle";
import { Wrapper, Testimonials } from "./TestimonialStyles";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialDetails } from "./testimonialDetails";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  const people = testimonialDetails.map((person) => {
    return <SingleTestimonial key={person.id} {...person} />;
  });

  useEffect(() => {
    AOS.init({ duration: 500, once: true, delay: 200, easing: "ease-in-out" });
  }, []);

  return (
    <Wrapper>
      <Title>Our Backbone</Title>
      <SubTitle>What our customers think of us.</SubTitle>
      <Testimonials
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
      >
        {people}
      </Testimonials>
    </Wrapper>
  );
};

export default Testimonial;
