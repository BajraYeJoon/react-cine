import TopRatedMovies from "@/components/homeComponents/topRatedMovies";
import { Share, MessageCircle } from "lucide-react";
import { Fragment } from "react";

const movies = [
  {
    id: "tomb-raider",
    image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    title: "Tomb Raider",
    year: "2018",
    director: "Roar Uthaug",
    duration: "125 min",
    genre: "Action, Fantasy",
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
    genre: "Action, Fantasy",
    description:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  },
  {
    id: "tomb-raidadsfer",
    image: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    title: "Tomb Raider",
    year: "2018",
    director: "Roar Uthaug",
    duration: "125 min",
    genre: "Action, Fantasy",
    description:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  },
];

const Movies = () => {
  return (
    <>
      <div
        className="border h-72 gap-3 
      "
      >
        <h1 className="text-2xl font-semibold">Top Movies</h1>
        <TopRatedMovies showRank swiper />
      </div>
      <div className="relative flex flex-wrap justify-center  my-0 mx-auto overflow-hidden rounded-lg  gap-7">
        {movies.map((movie) => (
          <Fragment key={movie.id}>
            <div className="border-2 relative max-w-72 h-full shadow-lg shadow-primary z-2 rounded-lg">
              <div className="relative p-6 h-2/5">
                <img
                  className="relative float-left mr-5 h-24 shadow-lg"
                  src={movie.image}
                  alt={movie.title}
                />
                <h1 className="text-white font-normal">{movie.title}</h1>
                <h4 className="text-blue-300 font-normal">
                  {movie.year}, {movie.director}
                </h4>
                <span className="inline-block mt-2.5 text-white p-1.5 rounded-md border border-white border-opacity-13">
                  {movie.duration}
                </span>
                <p className="inline-block text-blue-200 ml-2.5">
                  {movie.genre}
                </p>
              </div>
              <div className="p-6 h-1/2 max-w-md">
                <p className="text-gray-300">{movie.description}</p>
              </div>
              <div className="h-1/10 pl-4 pb-5">
                <ul className="list-none p-0">
                  <li className="inline-block text-white text-opacity-40 transition-colors duration-300 delay-150 mx-2.5 hover:text-opacity-80">
                    <Share className="text-lg cursor-pointer" />
                  </li>
                  <li className="inline-block text-white text-opacity-40 transition-colors duration-300 delay-150 mx-2.5 hover:text-opacity-80">
                    <MessageCircle className="text-lg cursor-pointer" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute top-0 right-0 z-1 h-full w-full bg-cover rounded-lg blur_back tomb_back"></div>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Movies;
