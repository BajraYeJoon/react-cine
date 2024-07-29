import { Link, useParams } from "react-router-dom";
import { useMovieContext } from "@/context/movie-context";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const GenreButtons = ({ anime }: { anime?: boolean }) => {
  const { genres } = useMovieContext();
  const { genrePath } = useParams<{ genrePath: string }>();

  const genreName =
    genrePath || (genrePath ? genrePath.split("/")[1] : undefined);

  console.log("Current genreName from URL:", genreName);

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
      {genres.map(({ id, name }: any) => {
        return (
          <Button
            variant={genreName === name ? "default" : "secondary"}
            key={id}
          >
            <Link
              to={
                !anime ? `/genre/${name}/${id}` : `/genre/anime/${name}/${id} `
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
