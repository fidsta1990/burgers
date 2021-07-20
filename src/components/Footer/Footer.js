import React, { useState } from "react";
import { Wrapper, Container, Created, Social } from "./FooterStyle";
import { contactDetails, footerDetails, mobileDetails } from "./footerDetails";
import Card from "./Card";

const Footer = () => {
  const [contact] = useState(contactDetails);
  const [footer] = useState(footerDetails);
  const [mobile] = useState(mobileDetails);
  const year = new Date().getFullYear();
  const contactCard = contact.map((info) => {
    const { addOne, addTwo, phone, email, title } = info;
    return (
      <Card key={info.id} className="contact">
        <h4>{title}</h4>
        <p>{addOne}</p>
        <p>{addTwo}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </Card>
    );
  });

  const footerCards = footer.map((info) => {
    const { title, linkOne, linkTwo, linkThree, linkFour } = info;

    return (
      <Card className="contact" key={info.id}>
        <h4>{title}</h4>
        <p>{linkOne}</p>
        <p>{linkTwo}</p>
        <p>{linkThree}</p>
        <p>{linkFour}</p>
      </Card>
    );
  });

  const mobileCard = mobile.map((info) => {
    const {
      title,
      socialOne,
      socialTwo,
      socialThree,
      urlOne,
      urlTwo,
      urlThree,
      iconOne,
      iconTwo,
      descOne,
      descTwo,
    } = info;

    return (
      <Card key={info.id} className="contact mobile" contact>
        <h4>{title}</h4>
        <p>
          {iconOne} {descOne}
        </p>
        <p>
          {iconTwo} {descTwo}
        </p>
        <Social>
          <a href={urlOne} target="_blank" rel="noreferrer">
            {socialOne}
          </a>
          <a href={urlTwo} target="_blank" rel="noreferrer">
            {socialTwo}
          </a>
          <a href={urlThree} target="_blank" rel="noreferrer">
            {socialThree}
          </a>
        </Social>
      </Card>
    );
  });

  return (
    <Wrapper>
      <Container>
        {contactCard}
        {footerCards}
        {mobileCard}
      </Container>
      <Created>
        <p>
          Copyright © {year} Spicy Burger Ltd by Fidel. All Rights Reserved.
        </p>
      </Created>
    </Wrapper>
  );
};

export default Footer;
