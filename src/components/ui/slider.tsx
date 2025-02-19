import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
  return (
    <div className="slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="bg-[url('https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1600')] h-screen bg-no-repeat bg-cover bg-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-screen  bg-no-repeat bg-cover bg-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://images.pexels.com/photos/18766323/pexels-photo-18766323.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load')] h-screen  bg-no-repeat bg-cover bg-center"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
