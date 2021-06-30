import React from "react";
import { Wrapper } from "./BannerStyles";
import Button from "../UI/Button";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <Wrapper>
      <h1>Order Online</h1>
      <h3>Get 25% Off Your First Order</h3>
      <p>
        Kids meal for half price along with a tatsy milkshake of your
        choosing.Hurry, deal ends <span>Friday 10th July.</span>
      </p>
      <Link to="/menu" className="banner-btn">
        <Button>Get Offer</Button>
      </Link>
    </Wrapper>
  );
};

export default Banner;