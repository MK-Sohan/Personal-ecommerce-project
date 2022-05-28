import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carusel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="" src="https://i.ibb.co/d6Gv94x/edit-2-1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src="https://i.ibb.co/Dbsj2FN/edit.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src="https://i.ibb.co/XV1Z5Gt/edit-2.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
