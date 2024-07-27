import { useMovieContext } from "@/context/movie-context";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const GenreLayout = () => {
  const { genres, fetchGenres } = useMovieContext();

  useEffect(() => {
    fetchGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {genres.map(({ id, name }: any) => (
          <Button variant={"secondary"} key={id}>
            <Link to={`/genre/${name}/${id}`}>{name}</Link>
          </Button>
        ))}
      </motion.h1>
      <Outlet />
    </>
  );
};

export default GenreLayout;
