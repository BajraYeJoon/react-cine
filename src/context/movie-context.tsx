/* eslint-disable react-refresh/only-export-components */
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { fetchGenresFromAPI, fetchNowPlayingFromAPI } from "@/api/fetchapi";

// Define a type for the context value
interface MovieContextType {
  genres: string[];
  fetchGenres: () => Promise<void>;
  nowPlaying: any;
  fetchNowPlaying: () => Promise<void>;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [genres, setGenres] = useState<string[]>([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  const fetchGenres = async () => {
    const genres = await fetchGenresFromAPI();
    setGenres(genres);
  };

  const fetchNowPlaying = async () => {
    const nowPlaying = await fetchNowPlayingFromAPI();
    setNowPlaying(nowPlaying);
  };

  useEffect(() => {
    fetchGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MovieContext.Provider
      value={{
        genres,
        fetchGenres,
        nowPlaying,
        fetchNowPlaying,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
