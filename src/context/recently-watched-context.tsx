/* eslint-disable react-refresh/only-export-components */
import { fetchMovieDetails } from "@/api/fetchapi";
import { addRecentlyWatched, getRecentlyWatched } from "@/lib/indexdb";
import { createContext, useContext, useEffect, useState } from "react";

interface RecentProps {
  recentlyWatched: number[];
  handleRecentWatched: (id: number) => void;
}

const RecentlyWatchedContext = createContext<RecentProps | undefined>(
  undefined,
);

export const RecentlyWatchedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [recentlyWatched, setRecentlyWatched] = useState<number[]>([]);
  const [onlyIds, setOnlyIds] = useState<number[]>([]);

  const handleRecentWatched = async (id: number) => {
    try {
      await addRecentlyWatched(id);
    } catch (error) {
      console.error("Failed to update recently watched:", error);
    }
  };

  const fetchRecentlyWatched = async () => {
    try {
      const getIdFromDB = await getRecentlyWatched();
      const onlyIds = getIdFromDB.map((item) => item.id);
      setOnlyIds(onlyIds);
    } catch (error) {
      console.log(error, "Something i did wrong");
    }
  };

  useEffect(() => {
    fetchRecentlyWatched();
  }, []);

  useEffect(() => {
    const fetchMovieDetailsFromId = async (onlyIds: number[]) => {
      const promises = onlyIds.map((id) => fetchMovieDetails(id));
      const results = await Promise.all(promises);
      setRecentlyWatched(results);
    };
    fetchMovieDetailsFromId(onlyIds);
  }, [onlyIds]);

  return (
    <RecentlyWatchedContext.Provider
      value={{ recentlyWatched, handleRecentWatched }}
    >
      {children}
    </RecentlyWatchedContext.Provider>
  );
};

export const useRecentContext = () => {
  const context = useContext(RecentlyWatchedContext);
  if (!context) {
    throw new Error("Error in the AuthContextProvider");
  }
  return context;
};
