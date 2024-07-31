import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { fetchGenresFromAPI } from "@/api/fetchapi";
import { Link } from "react-router-dom";
import { useMovieContext } from "@/context/movie-context";

const Onboarding = () => {
  const [open, setOpen] = useState(true);
  const [genres, setGenres] = useState<{ id: string; name: string }[]>([]);
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

  console.log(selectedGenres, "selectedGenres");


  const handleClick = () => {
    setUserSelectedGenres(selectedGenres);
    setOpen(false);
  };

  useEffect(() => {
    fetchGenresFromAPI().then((data) => {
      const formattedData = data.map((item) => ({
        id: item.id,
        name: item.name,
      }));
      setGenres(formattedData);
    });
  }, []);

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader>Welcome</DialogHeader>
        <DialogDescription className="flex flex-wrap gap-4">
          Choose some genres to get started
          {genres.map((genre) => (
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
        </DialogDescription>
        <Link to="/">
          <Button onClick={handleClick}>Let's go</Button>
        </Link>
      </DialogContent>
    </Dialog>
  );
};

export default Onboarding;