import { Link, useParams } from "react-router-dom";
import { useMovieContext } from "@/context/movie-context";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const GenreButtons = ({ path }: { path?: string | null }) => {
  const { genres } = useMovieContext();
  const { genre } = useParams();
  // const genreName = id || (id ? id.split("/")[1] : undefined);

  return (
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      {genres.map(({ id, name }: any) => {
        return (
          <Button variant={genre === name ? "default" : "secondary"} key={id}>
            <Link
              to={
                path ? `/genre/${path}/${name}/${id}` : `/genre/${name}/${id} `
              }
            >
              {name}
            </Link>
          </Button>
        );
      })}
    </motion.h1>
  );
};

export default GenreButtons;
