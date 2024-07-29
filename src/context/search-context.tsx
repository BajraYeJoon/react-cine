import { createContext, useContext, useState } from "react";

interface MovieSearchContextType {
  query: string;
  movie: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setMovie: React.Dispatch<React.SetStateAction<string>>;
}

const MovieSearchContext = createContext<MovieSearchContextType | undefined>(
  undefined,
);

export const MovieSearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState("");

  return (
    <MovieSearchContext.Provider value={{ query, movie, setQuery, setMovie }}>
      {children}
    </MovieSearchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieSearch = () => {
  const context = useContext(MovieSearchContext);
  if (context === undefined) {
    throw new Error("useMovieSearch must be used within a MovieSearchProvider");
  }
  return context;
};
