import { BookmarkIcon, Dot, Play } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useMovieContext } from "@/context/movie-context";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { useWatchlist } from "@/context/watchlist-context";
// import "./styles.css";

const BannerMovie = () => {
  const { nowPlaying, fetchNowPlaying } = useMovieContext();
  const { handleAddToWatchlist, isinWatchlist } = useWatchlist();

  useEffect(() => {
    fetchNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  // const backgroundImg = `https://image.tmdb.org/t/p/w500/${nowPlaying[0].poster_path}`;

  return (
    <>
      <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // scrollbar={{
          //   hide: false,
          // }}
          modules={[Scrollbar, Autoplay, Pagination]}
          className="mySwiper"
        >
          {nowPlaying.map((movie: any) => (
            <SwiperSlide key={movie.id}>
              <div className="absolute inset-0 z-40 bg-gradient-to-t from-background/90 to-transparent"></div>

              <img
                src={` https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="movie poster"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <motion.div
                className="absolute bottom-0 left-0 z-40 m-12 flex flex-col items-start gap-2"
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                <Button variant="secondary">Movie</Button>
                <motion.h1
                  variants={variants}
                  className="text-5xl font-bold leading-none tracking-wide"
                >
                  {movie.title}
                </motion.h1>
                <motion.div
                  variants={variants}
                  className="mb-4 inline-flex items-center text-sm font-light tracking-wide"
                >
                  <span>{movie.adult === "false" ? "PG" : "PG-13"}</span>
                  <Dot />
                  <span>{movie.release_date}</span>
                  <Dot />

                  <span>{movie.vote_average.toFixed(2)}</span>
                </motion.div>

                <motion.div variants={variants} className="inline-flex gap-2">
                  <Link to={`/details/${movie.id}`}>
                    <Button className="flex items-center justify-center gap-3 px-7 py-6">
                      <Play fill="white" size={16} />
                      Watch Trailer
                    </Button>
                  </Link>

                  <Button
                    variant={"ghost"}
                    className="gap-3 px-7 py-6"
                    onClick={() => handleAddToWatchlist(movie)}
                  >
                    <BookmarkIcon size={16} />
                    {isinWatchlist(movie.id) ? "Remove from Watchlist" : "Add to Watchlist" }
                  </Button>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BannerMovie;
