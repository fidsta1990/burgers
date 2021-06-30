import React from "react";
import { CardItem, Image, Title, Link, BtnWrap } from "./OfferCardStyles";

const OfferCard = ({ name, price, img }) => {
  return (
    <CardItem>
      <Title>{name}</Title>
      <Image src={img} alt={name} />
      <p>£ {price}</p>
      <BtnWrap>
        <Link to="/menu">More Info</Link>
      </BtnWrap>
    </CardItem>
  );
};

export default OfferCard;