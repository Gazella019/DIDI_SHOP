import { urlFor } from "../../lib/client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const DidiProduct = ({product}) => {
  console.log(product);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={urlFor(product.image[0])}/>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  )
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
