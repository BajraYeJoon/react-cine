import { useMovieContext } from "@/context/movie-context";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import GenreButtons from "@/components/genreButtons/GenreButtons";

const GenreLayout = () => {
  const { fetchGenres } = useMovieContext();

  useEffect(() => {
    fetchGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GenreButtons />
      <Outlet />
    </>
  );
};

export default GenreLayout;
