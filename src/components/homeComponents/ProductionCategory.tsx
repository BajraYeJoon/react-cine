import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import { Scrollbar, Pagination } from "swiper/modules";
import "./styles.css";

const productionImg = [
  {
    id: 1,
    text: "1",
  },

  {
    id: 2,
    text: "2",
  },
  {
    id: 3,
    text: "3",
  },
  {
    id: 4,
    text: "4",
  },
  {
    id: 5,
    text: "5",
  },
];

export default function ProductionCategory() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        scrollbar={{
          hide: false,
        }}
        autoplay={{
          delay: 500,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Scrollbar, Pagination]}
        className="mySwiper "
      >
        {productionImg.map((item) => (
          <SwiperSlide key={item.id}>
            {/* <img src={item.img} alt={item.name} /> */}
            <div className="h-24  w-full border-2 rounded-2xl">{item.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
