import { fetchMoviesWithGenreType } from "@/api/fetchapi";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const landing = () => {
  useEffect(() => {
    const handleGetMoviesFromGenre = async (id: string) => {
      const res = await fetchMoviesWithGenreType(id);
      console.log(res);
    };

    handleGetMoviesFromGenre();
  }, [id]);

  return (
    <div>
      <Link to={"/genres/action"}>Actiasdfasdfasdfon</Link>
    </div>
  );
};

export default landing;
