import React, { Component } from "react";
import Slider from "react-slick";
import { DisplayCard } from "../StyledBasicComponents";
import { Home_Display_Cards } from "./Home_Display_Cards";

export default class MultipleItems extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        // slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
        <Home_Display_Cards/>

        </Slider>
      </div>
    );
  }
}