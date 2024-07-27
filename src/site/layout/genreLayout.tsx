import { useMovieContext } from "@/context/movie-context";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GenreLayout = () => {
  const { genres, fetchGenres } = useMovieContext();

  useEffect(() => {
    fetchGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {genres.map(({ id, name }: any) => (
        <Button variant={"secondary"} key={id}>
          <Link to={`/genre/${name}/${id}`}>{name}</Link>
        </Button>
      ))}
      <Outlet />
    </>
  );
};

export default GenreLayout;
