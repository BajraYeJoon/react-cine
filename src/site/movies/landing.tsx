import TopRatedMovies from "@/components/homeComponents/topRated";
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { MovieDetails } from "@/components/coming-soon/details/DetailPage";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesWithGenreType } from "@/api/fetchapi";
import useWindow from "@/lib/useWindow";

const Movies = () => {
  const [bestofMovies, setBestofMovies] = useState([]);
  const { dimension } = useWindow();

  useEffect(() => {
    (async () => {
      const res = await fetchMoviesWithGenreType(16);
      setBestofMovies(res);
    })();
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <section className="my-4 px-4 md:p-0">
      <div className="h-72 gap-3">
        <h1 className="text-2xl font-light md:text-3xl">Top Movies</h1>
        <TopRatedMovies showRank swiper />
      </div>
      <h2 className="mb-4 text-2xl font-light md:text-3xl">
        Try Something New
      </h2>
      <motion.div
        className="[&>*:nth-child(odd)] relative mx-auto my-0 flex flex-wrap justify-around gap-4 md:justify-between md:gap-7"
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {bestofMovies.map(
          ({
            id,
            title,
            release_date,
            backdrop_path,
            // last_air_date,
            status,
          }: MovieDetails) => (
            <motion.div
              className="w-40 bg-background shadow md:w-72"
              key={id}
              variants={variants}
            >
              <div className="h-44 rounded-md bg-foreground/25">
                <img
                  className="h-44 w-full rounded-md object-cover object-bottom"
                  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                  alt=""
                />
              </div>
              <div className="group px-1 py-3">
                {/* <Link to={`${last_air_date ? "tv" : "movie"}/details/${id}`}> */}
                <Link to={`/details/${id}`}>
                  <h5 className="w-fit text-xl font-light tracking-tight text-white group-hover:underline">
                    {dimension.width < 768
                      ? title.length > 20
                        ? `${title.slice(0, 20)}...`
                        : title
                      : title}
                  </h5>
                </Link>
                <div className="flex items-center justify-start gap-2">
                  <StarIcon size={14} fill="yellow" /> <span>4.5</span>
                  <div className="bg-foreground/25 px-[0.75px] py-2" />
                  <div className="*:text-md flex gap-1 *:font-light *:text-foreground/55">
                    <span>{release_date}</span>
                    <span>{status}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ),
        )}
      </motion.div>
    </section>
  );
};

export default Movies;
