import { HiArrowLongRight } from "react-icons/hi2";
import { Button, Rating } from "@mui/material";
import ProductItem from "../../../Components/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

const RelatedProducts = (props) => {
    return (
        <div>
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="info">
                  <h3>{props.title}</h3>
                
                </div>

                {/* Button Container - Moves Button to Right */}
                <div className="d-flex justify-content-end">
                  <Button className="viewAllBtn">
                    View All <HiArrowLongRight />
                  </Button>
                </div>
              </div>

{/* slider */}

<div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  navigation={true}
                  pagination={false}
                  modules={[Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10
                    },
                    // when window width is >= 576px
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 15
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 15
                    },
                    // when window width is >= 992px
                    992: {
                      slidesPerView: 4,
                      spaceBetween: 20
                    }
                  }}
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

        </div>
    )
}
export default RelatedProducts