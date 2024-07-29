import TopRatedMovies from "@/components/homeComponents/topRated";
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { MovieDetails } from "@/components/details/DetailPage";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesWithGenreType } from "@/api/fetchapi";

// const movies = [
//   {
//     id: "tomb-raider",
//     image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
//     title: "Tomb Raider",
//     year: "2018",
//     director: "Roar Uthaug",
//     duration: "125 min",
//     genre: "Action",
//     type: "Movie",
//     description:
//       "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
//   },
//   {
//     id: "tomb-raiasdfder",
//     image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
//     title: "Tomb Raider",
//     year: "2018",
//     director: "Roar Uthaug",
//     duration: "125 min",
//     genre: "Action",
//     type: "Movie",
//     description:
//       "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
//   },
//   {
//     id: "tomb-rqweraidadsfer",
//     image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
//     title: "Tomb Raider",
//     year: "2018",
//     director: "Roar Uthaug",
//     duration: "125 min",
//     genre: "Action",
//     type: "Series",
//     description:
//       "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
//   },
//   {
//     id: "tomb-raiqwdaserwerdfadsfer",
//     image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
//     title: "Tomb Raider",
//     year: "2018",
//     director: "Roar Uthaug",
//     duration: "125 min",
//     genre: "Action",
//     type: "Series",
//     description:
//       "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
//   },
//   {
//     id: "tomb-rasdfaidwretadsfer",
//     image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
//     title: "Tomb Raider",
//     year: "2018",
//     director: "Roar Uthaug",
//     duration: "125 min",
//     genre: "Action",
//     type: "Series",
//     description:
//       "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
//   },
//   {
//     id: "tomb-raiadsfdtweradsfer",
//     image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
//     title: "Tomb Raider",
//     year: "2018",
//     director: "Roar Uthaug",
//     duration: "125 min",
//     genre: "Action",
//     type: "Series",
//     description:
//       "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
//   },
//   {
//     id: "tomb-rasdfaidatwertdsfer",
//     image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
//     title: "Tomb Raider",
//     year: "2018",
//     director: "Roar Uthaug",
//     duration: "125 min",
//     genre: "Action",
//     type: "Series",
//     description:
//       "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
//   },
//   {
//     id: "tomb-raasdfq43534idadsfer",
//     image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
//     title: "Tomb Raider",
//     year: "2018",
//     director: "Roar Uthaug",
//     duration: "125 min",
//     genre: "Action",
//     type: "Series",
//     description:
//       "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
//   },
// ];

const Movies = () => {
  // const name = randomGenre.name;

  const [bestofMovies, setBestofMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetchMoviesWithGenreType("16");
      setBestofMovies(res);
    })();
  }, []);

  console.log(bestofMovies);

  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <section className="my-4">
      <div className="h-72 gap-3">
        <h1 className="text-3xl font-medium">Top Movies</h1>
        <TopRatedMovies showRank swiper />
      </div>
      <h2 className="mb-4 text-3xl font-medium">Try Something New</h2>
      <motion.div
        className="[&>*:nth-child(odd)] relative mx-auto my-0 flex flex-wrap justify-between gap-7"
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
        {bestofMovies.map((movie: MovieDetails) => (
          <motion.div
            className="w-72 bg-background shadow"
            key={movie.id}
            variants={variants}
          >
            <div className="h-44 rounded-md bg-foreground/25">
              <img
                className="h-44 w-full rounded-md object-cover object-bottom"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt=""
              />
            </div>
            <div className="group px-1 py-3">
              <Link to={`/details/${movie.id}`}>
                <h5 className="w-fit text-xl font-light tracking-tight text-white group-hover:underline">
                  {movie.title}
                </h5>
              </Link>
              <div className="flex items-center justify-start gap-2">
                <StarIcon size={14} fill="yellow" /> <span>4.5</span>
                <div className="bg-foreground/25 px-[0.75px] py-2" />
                <div className="*:text-md flex gap-1 *:font-light *:text-foreground/55">
                  <span>{movie.release_date}</span>
                  <span>{movie.status}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Movies;
