import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { CountdownTimerFour } from "../components/Countdown";
import { LayoutDidi, LayoutEight } from "../components/Layout";
import { HeroSliderFour, HeroSliderSeven  } from "../components/HeroSlider";
import { SectionTitleOne } from "../components/SectionTitle";
import { getProducts } from "../lib/product";
import { ProductGridWrapper } from "../components/ProductThumb";
import { TestimonialOne } from "../components/Testimonial";
import { ImageCtaTwo } from "../components/Cta";
import { HoverBannerOne, HoverBannerFour } from "../components/Banner";
import { ImageSliderOne, ImageSliderTwo, ImageSliderThree } from "../components/ImageSlider";
import { FooterTwo } from "../components/Footer";
import heroSliderData from "../data/hero-sliders/hero-slider-five.json";
import testimonialOneData from "../data/testimonials/testimonial-one.json";
import imageSliderData from "../data/image-sliders/image-slider-one.json";

const Furniture = ({ products }) => {

  const banner1text = ['珠寶玉石', '服裝飾品', '日常用品'];
  const banner2text = ['食品', '房屋/車', '合作商家'];

  const banner1img = [
    "https://images.unsplash.com/photo-1502652023201-a16bde8138d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",                    
    "https://images.unsplash.com/photo-1539050125830-eb92d115b2b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  ];
  const banner2img = [
    "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80",
    "https://images.unsplash.com/photo-1594950195709-a14f66c242d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
  ];

  return (
    <LayoutDidi aboutOverlay={false}>
      {/* hero slider */}
      <div className="shop-page-content shop-all">
        <HeroSliderFour 
          sliderData={heroSliderData}
          spaceBottomClass="space-mb--50"
        />
          <div className="space-mb--r100"></div>
          {/* hover banner */}
          <HoverBannerOne spaceBottomClass="space-mb--r100" text={banner1text} images={banner1img}/>
          <HoverBannerOne spaceBottomClass="space-mb--r100" text={banner2text} images={banner2img}/>

          {/* Image slider for testing purpose */}
          <ImageSliderTwo imageSliderData={imageSliderData} />

          {/* image cta */}
          <ImageCtaTwo spaceBottomClass="space-pb--r100" />
          <FooterTwo/>
      </div>
    </LayoutDidi>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    products: getProducts(products, "furniture", "popular", 8)
  };
};

export default connect(mapStateToProps)(Furniture);
