import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import "./styles.css";
import FavoriteGenres from "./favoriteGenres";

const ResumeWatch = () => {
  return (
    <section className="grid grid-cols-3 mt-5 gap-10 shadow-inner">
      <div className="col-span-2 rounded-2xl flex flex-col gap-4 items-start overflow-hidden shadow-inner">
        <h1 className="text-2xl font-normal tracking-normal">
          Continue Watching
        </h1>

        <div className="w-full">
          <Swiper
            navigation={false}
            slidesPerView={2}
            spaceBetween={20}
            modules={[Navigation]}
            className="mySwiper flex gap-4"
          >
            <SwiperSlide className="flex h-56  rounded-2xl bg-foreground/25 items-center justify-center"></SwiperSlide>
            <SwiperSlide className="flex h-56 rounded-2xl bg-foreground/25 items-center justify-center  "></SwiperSlide>
            <SwiperSlide className="flex h-56  rounded-2xl bg-foreground/25 items-center justify-center"></SwiperSlide>
            <SwiperSlide className="flex h-56  rounded-2xl bg-foreground/25 items-center justify-center  "></SwiperSlide>
            <SwiperSlide className="flex h-56  rounded-2xl bg-foreground/25 items-center justify-center"></SwiperSlide>
            <SwiperSlide className="flex h-56  rounded-2xl bg-foreground/25 items-center justify-center  "></SwiperSlide>
          </Swiper>
        </div>
      </div>

      <FavoriteGenres />
    </section>
  );
};

export default ResumeWatch;
