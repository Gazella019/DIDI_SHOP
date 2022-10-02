import { urlFor } from "../../lib/client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';
import "swiper/components/scrollbar/scrollbar.min.css";


import SwiperCore, { Navigation, Thumbs, Scrollbar } from "swiper";
SwiperCore.use([Navigation, Thumbs, Scrollbar]);

const DidiProduct = ({product}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#a6a3a3",
          "--swiper-pagination-color": "#a6a3a3",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}
        modules={[Navigation, Thumbs]}
        className="didi-main-swiper"
      >
        {product.image.map((img, index) => (
          // console.log(index)
          <SwiperSlide>
            <img src={urlFor(product.image[index])} className="didi-main-img"/>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <img src={urlFor(product.image[0])} className="didi-main-img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={urlFor(product.image[1])} className="didi-main-img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={urlFor(product.image[2])} className="didi-main-img"/>
        </SwiperSlide> */}
      </Swiper>

      {/* Swiper for dual swiper */}
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={3}
        watchSlidesProgress={true}
        // modules={[Navigation, Thumbs]}
        // width={500}
        // height={500}
        className="didi-thumb-swiper"
      >
         <SwiperSlide>
          <img src={urlFor(product.image[0])} className="didi-main-img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={urlFor(product.image[1])} className="didi-main-img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={urlFor(product.image[2])} className="didi-main-img"/>
        </SwiperSlide>
      </Swiper> */}
    </>
  );
}
// const DidiProduct = (product) => {
//     return (
//         <div>
//           <div className="product-detail-container">
//             <div>
//               {/* <div className="image-container">
//                 <img src={urlFor(product.thumbImage)} className="product-detail-image" />
//               </div> */}
//               {/* <div className="small-images-container">
//                 {product.image.map((item, i) => (
//                   <img 
//                     key={i}
//                     src={urlFor(item)}
//                     className={i === index ? 'small-image selected-image' : 'small-image'}
//                     // onMouseEnter={() => setIndex(i)}
//                   />
//                 ))}
//               </div> */}
//             </div>
    
//             <div className="product-detail-desc">
//               <h1>hello</h1>
//               <h4>{product.shortDescription}</h4>
//               <p>this is a test</p>
//               <p className="price">$100</p>
//             </div>
//           </div>
//         </div>
//       )
// };

export default DidiProduct;
