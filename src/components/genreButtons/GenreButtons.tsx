import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useMovieContext } from "@/context/movie-context";

const GenreButtons = ({ anime }: { anime?: boolean }) => {
  const { genres } = useMovieContext();

  return (
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
          {}
          <Link
            to={anime ? `/genre/${name}/${id}` : `/genre/anime/${name}/${id} `}
          >
            {name}
          </Link>
        </Button>
      ))}
    </motion.h1>
  );
};

export default GenreButtons;
