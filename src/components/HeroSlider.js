import React, { Component } from 'react'

import Slider from 'react-slick'
import heroSliderData from '../assets/fake-data/hero-slider';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    )
}
  
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    )
}

export default class HeroSlider extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
      return (
        <div className="">
          <Slider {...settings}>
           {heroSliderData.map((item, index) => (
             <div key={index}>
               <img alt="" src={item.image} />
             </div>
           ))}
          </Slider>
        </div>
      )
    }
  }


