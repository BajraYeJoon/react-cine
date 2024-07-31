/* eslint-disable react-hooks/exhaustive-deps */
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { TbMovie } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Scrollbar } from "swiper/modules";
import { useState, useEffect } from "react";
import {
  fetchResultsbyFavoriteGenres,
  fetchTopRatedMoviesFromAPI,
  fetchTopRatedTVShowsFromAPI,
} from "@/api/fetchapi";
import { Link } from "react-router-dom";
import { useMovieContext } from "@/context/movie-context";

interface TopRatedMoviesProps {
  showRank?: boolean;
  swiper?: boolean;
  tvShow?: any;
}

const TopRatedPage = ({ showRank, swiper, tvShow }: TopRatedMoviesProps) => {
  const [topRated, setTopRated] = useState([]);

  const { favoriteGenres } = useMovieContext();

  useEffect(() => {
    const fetchTopRated = async () => {
      let topRatedData;
      if (favoriteGenres && favoriteGenres.length > 0) {
        topRatedData = await fetchResultsbyFavoriteGenres(
          favoriteGenres.map((genre) => genre.id),
        );
      } else {
        topRatedData = tvShow
          ? await fetchTopRatedTVShowsFromAPI()
          : await fetchTopRatedMoviesFromAPI();
      }
      setTopRated(topRatedData);
    };
    fetchTopRated();
  }, [tvShow, favoriteGenres]);

  const renderMovieItem = (item, index) => {
    const title = tvShow ? item.name : item.title;

    return (
      <div
        key={item.id}
        className={cn(
          "grid w-full grid-cols-2 gap-8",
          showRank && "flex w-fit gap-4",
        )}
      >
        {showRank && (
          <span className="my-auto w-fit text-center text-[6rem]">
            {index + 1}
          </span>
        )}
        <div
          className={cn(
            "h-28 w-32 items-center overflow-hidden rounded-3xl bg-foreground/25",
            showRank && "col-span-1 h-32 w-24",
          )}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt="movie poster"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="group flex min-w-48 flex-col justify-center">
          <span className="text-sm uppercase text-foreground/50">
            {item.original_language}
          </span>
          <Link to={`/details/${item.id}`}>
            <h4 className="text-nowrap text-xl capitalize group-hover:underline">
              {title.length > 10 ? title.slice(0, 20) + "..." : title}
            </h4>
          </Link>
          <span className="inline-flex items-center gap-2 opacity-30">
            <TbMovie />
            {item.popularity}
          </span>
          <span className="flex w-fit items-center gap-2 text-center text-lg">
            <StarIcon size={16} fill="yellow" />
            {item.vote_count}
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      {swiper ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          scrollbar={{
            hide: false,
            draggable: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Scrollbar]}
          className="mySwiper h-48"
        >
          {topRated.slice(0, 10).map((item, index) => (
            <SwiperSlide key={item.id} className="text-left">
              {renderMovieItem(item, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // items.map(renderMovieItem).slice(0, 4)
        topRated.map(renderMovieItem).slice(0, 4)
      )}
    </>
  );
};

export default TopRatedPage;
