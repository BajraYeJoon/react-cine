import { BookmarkIcon, Play } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useMovieContext } from "@/context/movie-context";
import { useEffect } from "react";
const BannerMovie = () => {
  const { nowPlaying, fetchNowPlaying } = useMovieContext();

  useEffect(() => {
    fetchNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(nowPlaying[0]);

  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  // const backgroundImg = `https://image.tmdb.org/t/p/w500/${nowPlaying[0].poster_path}`;

  return (
    <div
      className="relative col-span-2 row-span-2 overflow-hidden bg-foreground/25 bg-cover bg-center bg-no-repeat rounded-2xl"
      // style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent "></div>

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
        <Button variant="secondary">Series</Button>
        <motion.h1
          variants={variants}
          className="text-5xl tracking-wide leading-none font-bold"
        >
          MS.Marvel
        </motion.h1>
        <motion.div variants={variants} className="space-x-3 mb-4">
          <span>1 Season</span>
          <span>Episodes</span>
          <span>Superhero</span>
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
    </div>
  );
};

export default BannerMovie;
