import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="item1" />
          <p>Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="item1" />
          <p>Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
