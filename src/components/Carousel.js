import React from 'react';
// import uuid from 'uuid';
import { GatsbyImage } from "gatsby-plugin-image";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = ({ slides }) => {
  const settings = {
    swipeToSlide: true,
    dots: true,
    // fade:true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true
  };


  const carousel_Slides = slides.map(({ gatsbyImageData, id }) => {

console.log(id);
    return (
      <div key={id}>
        <GatsbyImage image={gatsbyImageData} alt='Slide' />
      </div>
    );
  });

  return <Slider {...settings}>{carousel_Slides}</Slider>;
};

export default Carousel;
