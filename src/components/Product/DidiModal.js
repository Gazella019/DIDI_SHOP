import { urlFor } from "../../lib/client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';
import "swiper/components/scrollbar/scrollbar.min.css";

import SwiperCore, { Navigation, Thumbs, Scrollbar } from "swiper";
SwiperCore.use([Navigation, Thumbs, Scrollbar]);
const DidiModal = ({product, onClickHandler}) => {

    return (
        <>
            <div className="didi-modal-container">
                <div className="didi-modal-content">
                    <Swiper
                        style={{
                        "--swiper-navigation-color": "#a6a3a3",
                        "--swiper-pagination-color": "#a6a3a3",
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="didi-product-swiper"
                        >
                        {product.image.map((img, index) => (
                            <SwiperSlide className="didi-swiper-card">
                                {/* <div className="didi-swiper-card"> */}
                                    <img src={urlFor(product.image[index])}/>
                                {/* </div> */}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                    {/* <div className="test">
                        <img src={urlFor(product.image[0])} className="didi-main-img"/>
                    </div> */}
            </div>
        </>
    )
}

export default DidiModal;