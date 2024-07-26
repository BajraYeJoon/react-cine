/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState, ReactNode } from "react";
import {
  fetchGenresFromAPI,
  fetchNowPlayingFromAPI,
  fetchTopRatedMoviesFromAPI,
} from "@/api/fetchapi";

// Define a type for the context value
interface MovieContextType {
  genres: string[];
  fetchGenres: () => Promise<void>;
  nowPlaying: any;
  fetchNowPlaying: () => Promise<void>;
  topRated: any;
  fetchTopRated: () => Promise<void>;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [genres, setGenres] = useState<string[]>([]);
  const [nowPlaying, setNowPlaying] = useState({});
  const [topRated, setTopRated] = useState({});

  const fetchTopRated = async () => {
    const topRated = await fetchTopRatedMoviesFromAPI();
    setTopRated(topRated);
  };

  const fetchGenres = async () => {
    const genres = await fetchGenresFromAPI();
    setGenres(genres);
  };

  const fetchNowPlaying = async () => {
    const nowPlaying = await fetchNowPlayingFromAPI();
    setNowPlaying(nowPlaying);
  };

  return (
    <MovieContext.Provider
      value={{
        genres,
        fetchGenres,
        nowPlaying,
        fetchNowPlaying,
        topRated,
        fetchTopRated,
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
