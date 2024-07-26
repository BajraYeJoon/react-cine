import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const fetchFromAPI = async (endpoint: string): Promise<any> => {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response = await axios.get(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch data from ${url}:`, error);
    return [];
  }
};

export const fetchTopRatedMoviesFromAPI = async (): Promise<any> => {
  const data = await fetchFromAPI("/movie/top_rated?language=en-US&page=1");
  return data.results || [];
};

export const fetchUpcomingMoviesFromAPI = async (): Promise<any> => {
  const data = await fetchFromAPI("/movie/upcoming?language=en-US&page=1");
  return data.results || [];
};

export const fetchNowPlayingFromAPI = async (): Promise<any> => {
  const data = await fetchFromAPI("/movie/now_playing?language=en-US&page=1");
  return data.results || [];
};

export const fetchGenresFromAPI = async (): Promise<string[]> => {
  const data = await fetchFromAPI("/genre/movie/list?language=en");
  return data.genres || [];
};

export const fetchTopRatedTVShowsFromAPI = async (): Promise<[]> => {
  const data = await fetchFromAPI("/tv/top_rated?language=en-US&page=1");
  return data.results || [];
};

export const fetchMoviesWithGenreType = async (
  genreId: string
): Promise<any> => {
  const data = await fetchFromAPI(
    `/discover/movie?with_genres=${genreId}&with_keywords=210024|287501&page=1`
  );
  return data.results || [];
};