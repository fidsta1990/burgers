import React, { useEffect } from "react";
import { Wrapper, Image, ImageContainer, Overlay } from "./GalleryStyles";
import { galleryDetails } from "../../utils/galleryDetails";
import Title from "../UI/Title";
import SubTitle from "../UI/SubTitle";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const gallery = galleryDetails.map((gallery) => {
    return (
      <Overlay key={gallery.id}>
        <Image
          className="image"
          style={{ backgroundImage: `url(${gallery.img})` }}
        />
      </Overlay>
    );
  });

  useEffect(() => {
    AOS.init({ duration: 500, once: true, delay: 200, easing: "ease-in-out" });
  }, []);

  return (
    <Wrapper>
      <Title>Gallery</Title>
      <SubTitle>Our Pride And Joys</SubTitle>
      <ImageContainer
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
      >
        {gallery}
      </ImageContainer>
    </Wrapper>
  );
};

export default Gallery;
