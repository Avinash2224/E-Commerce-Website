import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Slide changes every 3 seconds
    pauseOnHover: false, // Prevents autoplay from pausing when hovered
  };

  return (
  <div className="container mt-3">
      <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/banner-desktop_1440x.jpg?v=1734421227" className="w-100" />
        </div>
        <div className="item">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/web_2_1440x.jpg?v=1737548537" className="w-100" />
        </div>
        <div className="item">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/HB_banner_web_262426eb-25de-49d0-8d58-074b403c3f5f_1440x.png?v=1738340822" className="w-100" />
        </div>
        <div className="item">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Artboard_2_copy_1440x.png?v=1734675592" className="w-100" />
        </div>
      </Slider>
    </div>
  </div>
  );
};

export default HomeBanner;
