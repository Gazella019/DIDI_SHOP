import Link from "next/link";
import Swiper from "react-id-swiper";

const HeroSliderFour = ({ sliderData }) => {
  const params = {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    effect: "fade",
    watchSlidesVisibility: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div className="hero-slider-four">
      <div className="hero-slider-four__wrapper">
        <Swiper {...params}>
          {sliderData &&
            sliderData.map((single, i) => {
              return (
                <div
                  className="hero-slider-four__slide bg-img"
                  style={{ backgroundImage: `url(${single.bgImage})` }}
                  key={i}
                >
                  <div className="hero-slider-four__content">
                    <h1
                      className="title"
                      dangerouslySetInnerHTML={{ __html: single.title }}
                    />
                  </div>
                </div>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderFour;
