import React from "react";
import { Carousel } from "react-responsive-carousel";
import aac from "../assets/3.jpg";
import bcc from "../assets/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Services() {
  return (
    <>
      <Carousel
        infiniteLoop
        autoPlay
        interval={2000}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        stopOnHover={false}
        showThumbs={false}
      >
        <div>
          <img src={aac} alt="vnice"></img>
          <p className="legend">full stack development</p>
        </div>
        <div>
          <img src={bcc} alt="vnice"></img>
          <p className="legend">fuck you</p>
        </div>
      </Carousel>
    </>
  );
}

export default Services;
