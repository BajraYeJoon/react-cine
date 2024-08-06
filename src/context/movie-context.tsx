/* eslint-disable react-refresh/only-export-components */
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import { fetchGenresFromAPI, fetchNowPlayingFromAPI } from "@/api/fetchapi";
import { getUserSelectedGenres, saveUserSelectedGenres } from "@/lib/indexdb";

interface Genre {
  id: string;
  name: string;
}

interface MovieContextType {
  genres: Genre[];
  fetchGenres: () => Promise<void>;
  nowPlaying: number[];
  fetchNowPlaying: () => Promise<void>;
  userSelectedGenres: string[];
  setUserSelectedGenres: (genres: string[]) => void;
  favoriteGenres: Genre[];
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [userSelectedGenres, setUserSelectedGenres] = useState<string[]>([]);
  const fetchGenres = async () => {
    const genres = await fetchGenresFromAPI();
    setGenres(genres as unknown as Genre[]);
  };

  const fetchNowPlaying = async () => {
    const nowPlaying = await fetchNowPlayingFromAPI();
    setNowPlaying(nowPlaying.slice(0, 8));
  };
  const favoriteGenres = useMemo(() => {
    return genres.filter((genre) => userSelectedGenres.includes(genre.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSelectedGenres]);

  const fetchAllFavoriteGenres = async () => {
    const genres = await getUserSelectedGenres();
    setUserSelectedGenres(genres);
  };

  useEffect(() => {
    fetchGenres();
    fetchAllFavoriteGenres();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const genreIds = favoriteGenres.map((genre) => genre.id);
    saveUserSelectedGenres(genreIds);
  }, [favoriteGenres]);

  return (
    <MovieContext.Provider
      value={{
        genres,
        fetchGenres,
        nowPlaying,
        fetchNowPlaying,
        userSelectedGenres,
        setUserSelectedGenres,
        favoriteGenres,
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
