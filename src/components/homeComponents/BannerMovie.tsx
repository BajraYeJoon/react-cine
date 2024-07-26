import { BookmarkIcon, Dot, Play } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useMovieContext } from "@/context/movie-context";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "./styles.css";

const BannerMovie = () => {
  const { nowPlaying, fetchNowPlaying } = useMovieContext();

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
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 z-40 to-transparent "></div>

              <img
                src={` https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="movie poster"
                className="absolute inset-0 h-full w-full  object-center object-cover "
              />

              <motion.div
                className="absolute  bottom-0 m-12 left-0  z-40 flex items-start gap-2 flex-col"
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
                  className="text-5xl tracking-wide leading-none font-bold"
                >
                  {movie.title}
                </motion.h1>
                <motion.div
                  variants={variants}
                  className="inline-flex items-center mb-4 text-sm tracking-wide font-light"
                >
                  <span>{movie.adult === "false" ? "PG" : "PG-13"}</span>
                  <Dot />
                  <span>{movie.release_date}</span>
                  <Dot />

                  <span>{movie.vote_average.toFixed(2)}</span>
                </motion.div>

                <motion.div variants={variants} className="inline-flex gap-2">
                  <Button className="flex items-center justify-center gap-3 px-7 py-6">
                    <Play fill="white" size={16} />
                    Watch Trailer
                  </Button>

                  <Button variant={"ghost"} className="gap-3 px-7 py-6">
                    <BookmarkIcon size={16} />
                    Add to Watchlist
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
