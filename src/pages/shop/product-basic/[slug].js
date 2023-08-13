import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { LayoutDidi } from "../../../components/Layout";
import { getDiscountPrice } from "../../../lib/product";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import { IoMdArrowForward } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { DidiProductCard, DidiRelatedProduct, DidiModal }from "../../../components/Product";

import {
  DidiGallery,
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab
} from "../../../components/ProductDetails";
import { client, urlFor } from '../../../lib/client';
import { DidiProduct } from "../../../components/Product";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';
import "swiper/components/scrollbar/scrollbar.min.css";

const ProductBasic = ({
  product,
}) => {
  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });
  
  const [toggler, setToggler] = useState(false);

  const productPrice = product.price.toFixed(2);
  return (
    <LayoutDidi>
      <div className="product-details space-mt--r100 ">
        <Container className="didi-container">
          { toggler && <div>
            <div className="didi-overlay" onClick={() => setToggler(false)}>
            </div>
            <FaTimes className="didi-modal-btn" onClick={() => setToggler(false)}/>
            <DidiModal product={product}/>
          </div>}
          <div className="did-product-page">
            <div className="didi-main-swiper">
                {/* <DidiProduct product={product} onClick={() => setToggler(true)}/> */}
              <Swiper
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                style={{
                  "--swiper-navigation-color": "black",
                  "--swiper-pagination-color": "black",
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                className="didi-swiper"
              >
                {product.image.map((img, index) => (
                  <SwiperSlide className="didi-swiper-slide">
                      <img src={urlFor(product.image[index])} onClick={() => setToggler(true)}/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
             <div className="didi-product-container">
                <h2 className="didi-product-name">
                  <div>
                    {product.name} 
                  </div>
                  <div className="didi-product-price">
                    NT${product.price}
                  </div>
                </h2>
                <div className="didi-product-fullDescription">
                  {product.fullDescription}
                </div>
                <button className="didi-product-button">
                  <a href={product.lineURL}>
                    聯繫我們 <IoMdArrowForward/>
                  </a>
                </button>
              </div>
          </div>
          <Row>
            <div className="didi-product-video">
              <h3 className="space-mb--r50">
                影片介紹
              </h3>
              {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ONqYdBtTltg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
              <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${product.youtubeURL}`} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
            </div>
          </Row>
          <Row>
            <Col>
              {/* product description tab */}
              <ProductDescriptionTab product={product} />
            </Col>
          </Row>
              <DidiRelatedProduct/>
        </Container>
      </div>
      <div className="didi-product-banner">
      </div>
    </LayoutDidi>
  );
};

export default ProductBasic;
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);
  // console.log(product);
  return {
    props: { product },
    revalidate: 300,
  }
}