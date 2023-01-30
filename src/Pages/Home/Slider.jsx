import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper";
import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';
import img7 from '../../assets/images/banner/7.jpg';

const Slider=()=> {
  return (
    <div className="pt-10 lg:pt-0">
      <Swiper
        slidesPerView={3}
        loop={true}
        autoplay={{delay: 3000}}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="lg:w-[880px] lg:h-[600px] h-[280px]"
      >
        <SwiperSlide className="lg:py-40 py-16">
          <img className="h-full w-full object-cover" alt="." src={img1} />
        </SwiperSlide>
        <SwiperSlide className="lg:py-40 py-16">
          <img className="h-full w-full object-cover" alt="." src={img2} />
        </SwiperSlide>
        <SwiperSlide className="lg:py-40 py-16">
          <img className="h-full w-full object-cover" alt="." src={img3} />
        </SwiperSlide>
        <SwiperSlide className="lg:py-40 py-16">
          <img className="h-full w-full object-cover" alt="." src={img4} />
        </SwiperSlide>
        <SwiperSlide className="lg:py-40 py-16">
          <img className="h-full w-full object-cover" alt="." src={img5} />
        </SwiperSlide>
        <SwiperSlide className="lg:py-40 py-16">
          <img className="h-full w-full object-cover" alt="." src={img6} />
        </SwiperSlide>
        <SwiperSlide className="lg:py-40 py-16">
          <img className="h-full w-full object-cover" alt="." src={img7} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Slider;