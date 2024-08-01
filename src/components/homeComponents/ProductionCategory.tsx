import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import { Scrollbar, Pagination } from "swiper/modules";
import "./styles.css";

const productionImg = [
  {
    id: 1,
    img: "/marvel.png",
  },

  {
    id: 2,
    img: "/netflix.png",
  },
  {
    id: 3,
    img: "/disney.png",
  },
  {
    id: 4,
    img: "/nat.png",
  },
  // {
  //   id: 5,
  //   text: "5",
  // },
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
        className="mySwiper h-36 lg:h-52"
      >
        {productionImg.map((item) => (
          <SwiperSlide key={item.id}>
            {/* <img src={item.img} alt={item.name} /> */}
            <div className="flex h-24 w-full items-center justify-center rounded-2xl border-2">
              <img
                src={item.img}
                alt="production"
                className="h-16 w-auto bg-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
