import React from 'react';
import classes from "@/App.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import Img1 from "@/assets/image14.jpg";
import Img2 from "@/assets/image12.jpg";
import Img3 from "@/assets/image13.png";
import Img4 from "@/assets/image9.jpg";
import Img5 from "@/assets/image15.jpg";
import ReactDOM from "react-dom/client";
import {ThemeProvider} from "@mui/material";
import {theme} from "@/main";
import 'swiper/css';

const DemoSection = () => {
  return (
    <section className={classes.Demo}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          868: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        // style={{
        //   height: '300px',
        // }}
      >
        <SwiperSlide>
          <div className={classes.SlideItem}>
            <img className={classes.SlideImage} src={Img1} alt="application preview"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.SlideItem}>
            <img className={classes.SlideImage} src={Img2} alt="application preview"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.SlideItem}>
            <img className={classes.SlideImage} src={Img3} alt="application preview"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.SlideItem}>
            <img className={classes.SlideImage} src={Img4} alt="application preview"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.SlideItem}>
            <img className={classes.SlideImage} src={Img5} alt="application preview"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};


export default DemoSection;

