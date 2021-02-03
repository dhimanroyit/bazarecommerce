import React from 'react';

import slider2 from "../../assets/slider/slider-2.png";
import slider3 from "../../assets/slider/slider-3.png";
import slider4 from "../../assets/slider/slider-4.jpg";
import slider5 from "../../assets/slider/slider-5.png";

import { Carousel } from 'antd';

const HeroSlider = () => {
  const slider = [
    {id: "slider2", img: slider2},
    {id: "slider3", img: slider3},
    {id: "slider4", img: slider4},
    {id: "slider5", img: slider5},
  ]
  return (
    <section className="hero-slider">
      <div className="container">
          <Carousel className="hero-slider__carousel" autoplay>
            {slider.map(({id, img}) => (
              <div className="hero-slider__item" key={id}>
                <img src={img} alt="" className="hero-slider__img"/>
              </div>
            ))}
          </Carousel>
        
      </div>
    </section>
  )
}

export default HeroSlider;