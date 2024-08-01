import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";
import "./styles.css";
import FavoriteGenres from "./favoriteGenres";

const ResumeWatch = () => {
  return (
    <section className="mt-5 grid grid-cols-1 gap-10 shadow-inner lg:grid-cols-3">
      <div className="order-2 flex flex-col items-start gap-4 overflow-hidden rounded-2xl shadow-inner md:col-span-2 lg:-order-1">
        <h1 className="text-2xl font-normal tracking-normal">
          Continue Watching
        </h1>

        <div className="w-full">
          <Swiper
            // navigation={false}
            slidesPerView={2}
            spaceBetween={20}
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar]}
            className="mySwiper flex h-60 gap-4"
          >
            <SwiperSlide className="flex h-56 items-center justify-center rounded-2xl bg-foreground/25"></SwiperSlide>
            <SwiperSlide className="flex h-56 items-center justify-center rounded-2xl bg-foreground/25"></SwiperSlide>
            <SwiperSlide className="flex h-56 items-center justify-center rounded-2xl bg-foreground/25"></SwiperSlide>
            <SwiperSlide className="flex h-56 items-center justify-center rounded-2xl bg-foreground/25"></SwiperSlide>
            <SwiperSlide className="flex h-56 items-center justify-center rounded-2xl bg-foreground/25"></SwiperSlide>
            <SwiperSlide className="flex h-56 items-center justify-center rounded-2xl bg-foreground/25"></SwiperSlide>
          </Swiper>
        </div>
      </div>

      <FavoriteGenres />
    </section>
  );
};

export default ResumeWatch;
