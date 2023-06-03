import React from "react";
import "./Slider.css";
import { video1, video2, video3, video4, video5 ,banner } from "../../images/images";

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { play } from "../../images/images";
import { sun } from "../../images/images";
import { star } from "../../images/images";
// import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";

const Slider = () => {
  const images = [
    {
      image: video3,
    },
    {
      image: video2,
    },
    {
      image: video1,
    },
    {
      image: video4,
    },
    {
      image: video5,
    },
    
  ];

  return (
    <div style={{backgroundColor:"#FFEFE3" , marginLeft:'80px', marginRight:'80px'}}>
    <img alt="" src={sun} className="sun-image"/>
    <h2> <img alt="" src={star}/> User Testimonal <img alt="" src={star}/></h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        // loop={true}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper allswipercontainer"
      >
        {images.map((item) => (
          <SwiperSlide
            className="relative"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height:'390px',
              width:'286px',
            }}
          >
            <img src={item.image} alt="image" className='selectImage' />
            <img src={play} alt="" className="play" />
          </SwiperSlide>
        ))}
      </Swiper>

     
    </div>
  );
};

export default Slider;