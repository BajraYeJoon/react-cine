/* eslint-disable react-refresh/only-export-components */
import { MovieDetails } from "@/components/details/DetailPage";
import { useToast } from "@/components/ui/use-toast";
import { addMovie, getAllMovies, removeMovie } from "@/lib/indexdb";
import { createContext, useContext, useState, useEffect } from "react";

interface WatchListContextType {
  watchlist: MovieDetails[];
  // addToWatchlist: (movie: MovieDetails) => Promise<void>;
  handleAddToWatchlist: (movie: MovieDetails) => void;
  // removeItemFromWatchlist: (id: number) => Promise<void>;
  isinWatchlist: (id: number) => boolean;
  handleRemoveFromWatchlist: (id: number) => Promise<void>;
}

const WatchListContext = createContext<WatchListContextType | undefined>(
  undefined
);

export const WatchListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [watchlist, setWatchlist] = useState<MovieDetails[]>([]);
  const { toast } = useToast();

  const fetchWatchlist = async () => {
    try {
      const movies = await getAllMovies();
      setWatchlist(movies);
    } catch (error) {
      console.error("Error fetching watchlist:", error);
    }
  };

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const addToWatchlist = async (movie: MovieDetails) => {
    await addMovie(movie).then(() => {
      toast({
        title: "Movie added to watchlist!",
        description: `${movie.original_title} has been added to your watchlist.`,
      });
    });
    setWatchlist((prev) => [...prev, movie]);
  };

  const isinWatchlist = (id: number) => {
    return watchlist.some((item) => item.id === id);
  };

  const removeItemFromWatchlist = async (id: number) => {
    try {
      await removeMovie(id).then(() => {
        toast({
          title: "Movie removed to watchlist!",
        });
      });
      setWatchlist((prev) => prev.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Failed to remove movie from watchlist:", error);
    }
  };

  const handleAddToWatchlist = async (movie: MovieDetails) => {
    try {
      await addToWatchlist(movie);
    } catch (error) {
      console.error("Failed to add movie to watchlist:", error);
    }
  };

  const handleRemoveFromWatchlist = async (id: number) => {
    try {
      await removeItemFromWatchlist(id);
    } catch (error) {
      console.error("Failed to remove movie from watchlist:", error);
    }
  };

  return (
    <WatchListContext.Provider
      value={{
        watchlist,
        // addToWatchlist,
        handleAddToWatchlist,
        isinWatchlist,
        // removeItemFromWatchlist,
        handleRemoveFromWatchlist,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export const useWatchlist = (): WatchListContextType => {
  const context = useContext(WatchListContext);
  if (!context) {
    throw new Error("if you are here i probably messed up");
  }
  return context;
};
