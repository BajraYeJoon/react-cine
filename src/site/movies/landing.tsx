import TopRatedMovies from "@/components/homeComponents/topRated";
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";

const movies = [
  {
    id: "tomb-raider",
    image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    title: "Tomb Raider",
    year: "2018",
    director: "Roar Uthaug",
    duration: "125 min",
    genre: "Action",
    type: "Movie",
    description:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  },
  {
    id: "tomb-raiasdfder",
    image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    title: "Tomb Raider",
    year: "2018",
    director: "Roar Uthaug",
    duration: "125 min",
    genre: "Action",
    type: "Movie",
    description:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  },
  {
    id: "tomb-rqweraidadsfer",
    image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    title: "Tomb Raider",
    year: "2018",
    director: "Roar Uthaug",
    duration: "125 min",
    genre: "Action",
    type: "Series",
    description:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  },
  {
    id: "tomb-raiqwdaserwerdfadsfer",
    image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    title: "Tomb Raider",
    year: "2018",
    director: "Roar Uthaug",
    duration: "125 min",
    genre: "Action",
    type: "Series",
    description:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  },
  {
    id: "tomb-rasdfaidwretadsfer",
    image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    title: "Tomb Raider",
    year: "2018",
    director: "Roar Uthaug",
    duration: "125 min",
    genre: "Action",
    type: "Series",
    description:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  },
  {
    id: "tomb-raiadsfdtweradsfer",
    image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    title: "Tomb Raider",
    year: "2018",
    director: "Roar Uthaug",
    duration: "125 min",
    genre: "Action",
    type: "Series",
    description:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  },
  {
    id: "tomb-rasdfaidatwertdsfer",
    image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    title: "Tomb Raider",
    year: "2018",
    director: "Roar Uthaug",
    duration: "125 min",
    genre: "Action",
    type: "Series",
    description:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  },
  {
    id: "tomb-raasdfq43534idadsfer",
    image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    title: "Tomb Raider",
    year: "2018",
    director: "Roar Uthaug",
    duration: "125 min",
    genre: "Action",
    type: "Series",
    description:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  },
];

const Movies = () => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <section className="my-4">
      <div
        className=" h-72 gap-3 
      "
      >
        <h1 className="text-3xl font-medium">Top Movies</h1>
        <TopRatedMovies showRank swiper />
      </div>
      <h2 className="mb-4 text-3xl font-medium">Best of Action</h2>
      <motion.div
        className="relative flex flex-wrap center [&>*:nth-child(odd)]  my-0 mx-auto   gap-7"
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
        {movies.map((movie) => (
          <motion.div
            className="w-72 bg-background shadow "
            key={movie.id}
            variants={variants}
          >
            <div className="bg-foreground/25 h-44 rounded-md">
              {/* <img
     className="rounded-md w-full h-44 object-cover object-bottom "
     src="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"
     alt=""
   /> */}
            </div>
            <div className="px-1 py-3">
              <h5 className=" text-xl font-light tracking-tighttext-white">
                {movie.title}
              </h5>
              <div className="flex items-center justify-start gap-2">
                <StarIcon size={14} fill="yellow" /> <span>4.5</span>
                <div className="px-[0.75px] py-2 bg-foreground/25" />
                <div className="flex gap-1 *:text-md *:font-light *:text-foreground/55">
                  <span>{movie.genre}</span>
                  <span>{movie.type}</span>
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
