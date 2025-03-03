import { Button, Rating } from "@mui/material";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import { HiArrowLongRight } from "react-icons/hi2";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";

const Home = () => {
  var productSliderOptions = {
    items: 4,
    nav: true,
    rewind: true,
    autoplay: true,
  };

  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            {/* Left Column - Image */}
            <div className="col-md-3">
              <div className="banner">
                <img
                  src={banner1}
                  className="cursor"
                  style={{ width: "450px", height: "auto" }}
                  alt="Banner"
                />
                <div className="mt-3">
                <img
                  src={banner2}
                  className="cursor"
                  style={{ width: "300px", height: "500px" }}
                  alt="Banner"
                />
                </div>
              </div>
            </div>

            

            {/* Right Column - Content & Button */}
            <div className="col-md-9 productRow">
                
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="info">
                  <h3>BEST SELLER</h3>
                  <p style={{ color: "#111" }}>
                    Do not miss the current offers until the end of March
                  </p>
                </div>

                {/* Button Container - Moves Button to Right */}
                <div className="d-flex justify-content-end">
                  <Button className="viewAllBtn">
                    View All <HiArrowLongRight />
                  </Button>
                </div>
              </div>

              {/* Product Slider */}
              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={0}
                  navigation={true}
                  pagination={false}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                    <SwiperSlide>
                    <ProductItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProductItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProductItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProductItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                    <ProductItem/>
                    </SwiperSlide>

                </Swiper>
              </div>
            
{/* copied the above code and pasted it below to create new product section  section */}
        
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="info">
                  <h3>New Products</h3>
                  <p style={{ color: "#111" }}>
                    Available Products in our store
                  </p>
                </div>

                {/* Button Container - Moves Button to Right */}
                <div className="d-flex justify-content-end">
                  <Button className="viewAllBtn">
                    View All <HiArrowLongRight />
                  </Button>
                </div>
              </div>

              {/* Product Slider */}
              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
              </div>

                <div className="d-flex justify-content-between
                ">
                <div className="banner_down">
                <img
                  src={banner3}
                  className="cursor md-2"
                  style={{ width: "480px", height: "230px" }}
                  alt="Banner"
                />
                </div>

                <div className="banner_down">
                <img
                  src={banner4}
                  className="cursor"
                  style={{ width: "450px", height: "230px" }}
                  alt="Banner"
                />
                </div>
                </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
