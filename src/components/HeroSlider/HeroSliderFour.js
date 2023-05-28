import Link from "next/link";
// import Swiper from "react-id-swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from "react";
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';
import "swiper/components/scrollbar/scrollbar.min.css";

import SwiperCore, { Navigation, Thumbs, Scrollbar, Autoplay } from "swiper";
SwiperCore.use([Navigation, Thumbs, Scrollbar, Autoplay]);

const HeroSliderFour = ({ sliderData }) => {

  return (
    <>
    <div>
        <div>
            <Swiper
                style={{
                "--swiper-navigation-color": "black",
                "--swiper-pagination-color": "black",
                }}
                // navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={true}
                >
                {sliderData.map((single, i) => (
                  <SwiperSlide
                  className="hero-slider-four__slide bg-img"
                  style={{ backgroundImage: `url(${single.bgImage})` }}
                  key={i}
                >
                  <div>
                    <h1
                      className="didi-hero-title"
                      dangerouslySetInnerHTML={{ __html: single.title }}
                    />
                  </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
            {/* <div className="test">
                <img src={urlFor(product.image[0])} className="didi-main-img"/>
            </div> */}
    </div>
</>
  );
};

export default HeroSliderFour;
