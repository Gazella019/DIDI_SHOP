import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { CountdownTimerFour } from "../../components/Countdown";
import { LayoutTwo, LayoutEight } from "../../components/Layout";
import { HeroSliderFive, HeroSliderSeven  } from "../../components/HeroSlider";
import { SectionTitleOne } from "../../components/SectionTitle";
import { getProducts } from "../../lib/product";
import { ProductGridWrapper } from "../../components/ProductThumb";
import { TestimonialOne } from "../../components/Testimonial";
import { ImageCtaTwo } from "../../components/Cta";
import { HoverBannerOne } from "../../components/Banner";
import { ImageSliderOne, ImageSliderTwo, ImageSliderThree } from "../../components/ImageSlider";

import heroSliderData from "../../data/hero-sliders/hero-slider-five.json";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";
import imageSliderData from "../../data/image-sliders/image-slider-one.json";

const Furniture = ({ products }) => {
  return (
    <LayoutTwo aboutOverlay={false}>
      {/* hero slider */}
      <HeroSliderSeven 
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--50"
      />
       <div className="space-mb--r100"></div>
      {/* hover banner */}
      <HoverBannerOne spaceBottomClass="space-mb--r100" />

      {/* Image slider for testing purpose */}
      <ImageSliderTwo imageSliderData={imageSliderData} />

      {/* image cta */}
      {/* <ImageCtaTwo spaceBottomClass="space-mb--r100" /> */}
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    products: getProducts(products, "furniture", "popular", 8)
  };
};

export default connect(mapStateToProps)(Furniture);
