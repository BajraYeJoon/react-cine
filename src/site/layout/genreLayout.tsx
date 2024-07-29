import { useMovieContext } from "@/context/movie-context";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import GenreButtons from "@/components/genreButtons/GenreButtons";

const GenreLayout = () => {
  const { fetchGenres } = useMovieContext();

  const location = useLocation();
  const genre = location.pathname.split("/")[2];

  const isAnime = genre === "anime";

  useEffect(() => {
    fetchGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GenreButtons path={isAnime ? "anime" : null} />
      <Outlet />
    </>
  );
};

export default GenreLayout;
