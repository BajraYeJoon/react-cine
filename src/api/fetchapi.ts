import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchTopRatedMoviesFromAPI = async (): Promise<any> => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  try {
    const response = await axios.get(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Failed to fetch top rated movies:", error);
    return [];
  }
};

export const fetchNowPlayingFromAPI = async (): Promise<any> => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  try {
    const response = await axios.get(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Failed to fetch now playing movies:", error);
    return [];
  }
};

export const fetchGenresFromAPI = async (): Promise<string[]> => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  try {
    const response = await axios.get(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.genres;
  } catch (error) {
    console.error("Failed to fetch genres:", error);
    return [];
  }
};
