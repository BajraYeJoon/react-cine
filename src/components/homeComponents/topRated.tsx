import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { TbMovie } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Scrollbar } from "swiper/modules";

interface TopRatedMoviesProps {
  showRank?: boolean;
  swiper?: boolean;
}

const items = [
  {
    id: 1,
    category: "pg 1",
    name: "name 1 adfasdfasdfasdfasdfasdfasdfasdfasdf",
    genre: "genre 1",
    rating: 8.2,
  },
  { id: 2, category: "pg 2", name: "name 2", genre: "genre 2", rating: 7.5 },
  { id: 3, category: "pg 3", name: "name 3", genre: "genre 3", rating: 9.0 },
  { id: 4, category: "pg 4", name: "name 4", genre: "genre 4", rating: 8.8 },
  { id: 5, category: "pg 2", name: "name 2", genre: "genre 2", rating: 7.5 },
  { id: 6, category: "pg 3", name: "name 3", genre: "genre 3", rating: 9.0 },
  { id: 7, category: "pg 4", name: "name 4", genre: "genre 4", rating: 8.8 },
];

const TopRatedPage = ({ showRank, swiper }: TopRatedMoviesProps) => {
  const renderMovieItem = (item) => (
    <div
      key={item.id}
      className={cn(
        "grid grid-cols-2 gap-8 w-full",
        showRank && "w-fit flex gap-4"
      )}
    >
      {showRank && (
        <span className="text-[6rem] text-center my-auto w-fit">{item.id}</span>
      )}
      <div
        className={cn(
          "h-28  w-32 items-center rounded-3xl bg-foreground/25",
          showRank && "col-span-1 h-32 w-24 "
        )}
      ></div>
      <div className="flex flex-col justify-center min-w-48">
        <span className="uppercase text-sm text-foreground/50">
          {item.category}
        </span>
        <h4 className="text-xl capitalize text-nowrap">
          {item.name.length > 10 ? item.name.slice(0, 20) + "..." : item.name}
        </h4>
        <span className="opacity-30 inline-flex items-center gap-2">
          <TbMovie />
          {item.genre}
        </span>
        <span className="flex items-center text-center w-fit gap-2 text-lg">
          <StarIcon size={16} fill="yellow" />
          {item.rating}
        </span>
      </div>
    </div>
  );

  return (
    <>
      {swiper ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          scrollbar={{
            hide: false,
            draggable: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Scrollbar]}
          className="mySwiper h-48 "
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="text-left">
              {renderMovieItem(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        items.map(renderMovieItem).slice(0, 4)
      )}
    </>
  );
};

export default TopRatedPage;
