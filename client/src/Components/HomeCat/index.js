import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation'; 
import { Navigation } from 'swiper/modules';
import { Button } from "@mui/material";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";

const HomeCat = () => {
  const items = Array(20).fill({
    imgSrc: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png",
    title: "Red apple"
  });
  
  const bgColors = [
    "#f8f9fa",   
    "#e9f5ff", 
    "#fdf2e9" 
  ];
  
  const getRandomBg = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
  };

  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-2">FEATURED ITEMS</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={5}
          navigation={true}
          slidesPerGroup={3}
          pagination={false}
          modules={[Navigation]}
          className="mySwiper"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div 
                className="item text-center cursor" 
                style={{ 
                  backgroundColor: getRandomBg(),
                  padding: "15px",
                  borderRadius: "8px"
                }}
              >
                <img src={item.imgSrc} alt={item.title} />
                <h6>{item.title}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;