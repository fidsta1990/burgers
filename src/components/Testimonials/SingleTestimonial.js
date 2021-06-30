import React from "react";
import { Card,Description } from "./TestimonialStyles";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const SingleTestimonial = ({ name, role, desc, img }) => {
  return (
    <Card>
      <img src={img} alt={name} />
      <Description>
        <span className="quoteL">
          <FaQuoteLeft />
        </span>
        <p>{desc}</p>
        <span className="quoteR">
          <FaQuoteRight />
        </span>
      </Description>
      <h4>{name}</h4>
      <h5>{role}</h5>
    </Card>
  );
};

export default SingleTestimonial;