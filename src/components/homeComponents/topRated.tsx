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
import { MovieDetails } from "../coming-soon/details/DetailPage";
import useWindow from "@/lib/useWindow";

interface TopRatedMoviesProps {
  showRank?: boolean;
  swiper?: boolean;
  isTvShow?: boolean;
}

const TopRatedPage = ({ showRank, swiper, isTvShow }: TopRatedMoviesProps) => {
  const [topRatedItems, setTopRatedItems] = useState([]);
  const { favoriteGenres } = useMovieContext();
  const { dimension } = useWindow();

  useEffect(() => {
    const fetchTopRated = async () => {
      const topRatedData = favoriteGenres?.length
        ? await fetchResultsbyFavoriteGenres(
            favoriteGenres.map((genre) => genre.id),
          )
        : isTvShow
          ? await fetchTopRatedTVShowsFromAPI()
          : await fetchTopRatedMoviesFromAPI();

      setTopRatedItems(topRatedData);
    };

    fetchTopRated();
  }, [favoriteGenres, isTvShow]);

  const renderMovieItem = (item: MovieDetails, index: number) => {
    const {
      id,
      name,
      title,
      original_language,
      poster_path,
      popularity,
      vote_count,
    } = item;

    return (
      <div
        key={id}
        className={cn(
          "grid w-full grid-cols-3 gap-20 md:grid-cols-2 md:gap-8",
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
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="movie poster"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="group col-span-2 flex min-w-48 flex-col justify-center md:col-auto">
          <span className="text-sm uppercase text-foreground/50">
            {original_language}
          </span>
          <Link to={`/details/${id}`}>
            <h4 className="text-nowrap text-xl capitalize group-hover:underline">
              {name?.length > 10 ? `${name.slice(0, 10)}...` : name || title}
            </h4>
          </Link>
          <span className="inline-flex items-center gap-2 opacity-30">
            <TbMovie />
            {popularity}
          </span>
          <span className="flex w-fit items-center gap-2 text-center text-lg">
            <StarIcon size={16} fill="yellow" />
            {vote_count}
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
          slidesPerView={dimension.width < 768 ? 1 : 3}
          scrollbar={{
            hide: false,
            // draggable: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper mx-4 h-52"
        >
          {topRatedItems
            .slice(0, 10)
            .map((item: MovieDetails, index: number) => (
              <SwiperSlide key={item.id} className="text-left">
                {renderMovieItem(item, index)}
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        topRatedItems.map(renderMovieItem).slice(0, 4)
      )}
    </>
  );
};

export default TopRatedPage;
