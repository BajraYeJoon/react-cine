import { useMovieContext } from "@/context/movie-context";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

import GenreButtons from "@/components/genreButtons/GenreButtons";

const GenreLayout = () => {
  const { fetchGenres } = useMovieContext();
  const { genre } = useParams();

  const isAnime = genre === "anime";

  useEffect(() => {
    fetchGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GenreButtons anime={isAnime} />
      <Outlet />
    </>
  );
};

export default GenreLayout;
