import { useMovieContext } from "@/context/movie-context";
import { Button } from "../ui/button";

import { Link } from "react-router-dom";

// const favoriteGenres = [
//   "Action",
//   "Adventure",
//   "Comedy",
//   "Crime",
//   "Drama",
//   "Fantasy",
// ];

const FavoriteGenres = () => {
  const { favoriteGenres } = useMovieContext();

  return (
    <section className="mt-4 space-y-4">
      <h1 className="text-2xl font-normal tracking-normal">Favorites Genres</h1>

      <div className="flex flex-wrap gap-3">
        {favoriteGenres.map(({ id, name }: any) => (
          <Button variant={"secondary"} key={id}>
            <Link to={`/genre/${name}/${id}`}>{name}</Link>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default FavoriteGenres;
