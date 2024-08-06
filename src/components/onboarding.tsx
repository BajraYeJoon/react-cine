import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { fetchGenresFromAPI } from "@/api/fetchapi";
import { Link } from "react-router-dom";
import { useMovieContext } from "@/context/movie-context";

interface Genre {
  id: string;
  name: string;
}

const Onboarding = () => {
  const [open, setOpen] = useState(true);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const { setUserSelectedGenres } = useMovieContext();

  const handleButtonClick = (genreId: string) => {
    setSelectedGenres((alreadyGenreSelect) => {
      const checked = alreadyGenreSelect.includes(genreId);

      if (checked) {
        return alreadyGenreSelect.filter((id) => id !== genreId);
      } else {
        return [...alreadyGenreSelect, genreId];
      }
    });
  };

  const handleClick = () => {
    setUserSelectedGenres(selectedGenres);
    setOpen(false);
  };

  useEffect(() => {
    fetchGenresFromAPI().then((data) => {
      const formattedData = data.map((item) => ({
        //@ts-expect-error - wrror
        id: item.id,
        //@ts-expect-error - wrror

        name: item.name,
      }));
      setGenres(formattedData);
    });
  }, []);

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader className="text-2xl">Welcome</DialogHeader>
        <DialogDescription className="flex flex-wrap gap-4">
          <h2>Choose some genres to get started</h2>
          <div className="flex flex-wrap gap-2">
            {genres.slice(0, 6).map((genre) => (
              <Button
                key={genre.id}
                variant={
                  selectedGenres.includes(genre.id) ? "default" : "secondary"
                }
                onClick={() => handleButtonClick(genre.id)}
              >
                {genre.name}
              </Button>
            ))}
          </div>
        </DialogDescription>
        <Link to="/">
          <Button onClick={handleClick}>Let's go</Button>
        </Link>
      </DialogContent>
    </Dialog>
  );
};

export default Onboarding;