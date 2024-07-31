import { useMovieContext } from "@/context/movie-context";
import { Button } from "../ui/button";

import { Link } from "react-router-dom";
import { useAuthContext } from "@/context/auth-context";

// const favoriteGenres = [
//   "Action",
//   "Adventure",
//   "Comedy",
//   "Crime",
//   "Drama",
//   "Fantasy",
// ];

const FavoriteGenres = () => {
  const { favoriteGenres, genres } = useMovieContext();
  const { isLoggedIn } = useAuthContext();

  const slicedGenre = genres.slice(0, 6);

  return (
    <section className="mt-4 space-y-4">
      <h1 className="text-2xl font-normal tracking-normal">
        {isLoggedIn ? "Favorite" : "Popular"} Genres
      </h1>

      <div className="flex flex-wrap gap-3">
        {isLoggedIn ? (
          <>
            {favoriteGenres.map(({ id, name }: any) => (
              <Button variant={"secondary"} key={id}>
                <Link to={`/genre/${name}/${id}`}>{name}</Link>
              </Button>
            ))}
          </>
        ) : (
          <>
            {slicedGenre.map(({ id, name }: any) => (
              <Button variant={"secondary"} key={id}>
                <Link to={`/genre/${name}/${id}`}>{name}</Link>
              </Button>
            ))}
          </>
        )}

        <Link to="/genres">
          <Button>+ Add More</Button>
        </Link>
      </div>
    </section>
  );
};

export default FavoriteGenres;
