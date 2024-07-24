import React from "react";
import { Button } from "../ui/button";

const favoriteGenres = [
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
];
const FavoriteGenres = () => {
  return (
    <section className="mt-4 space-y-4">
      <h1 className="text-2xl font-normal tracking-normal">Favorites Genres</h1>

      <div className="flex flex-wrap gap-3">
        {favoriteGenres.map((genre, index) => (
          <Button variant={"secondary"} key={index}>
            {genre}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default FavoriteGenres;
