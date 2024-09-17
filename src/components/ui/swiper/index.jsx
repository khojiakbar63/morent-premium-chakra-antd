import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./style.scss";


export const MySwiper = ({children}) => {
  return (
    <>
      {" "}
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{children}</SwiperSlide>
        
      </Swiper>
    </>
  );
};
