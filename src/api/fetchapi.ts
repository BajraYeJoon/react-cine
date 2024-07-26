import axios from "axios";

export const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTBiYjIwYjYwYmFhNjI5MjlkYzc5ZTY0MjYwZGEwOCIsIm5iZiI6MTcyMTk1NTc1Mi45MDA5MzIsInN1YiI6IjY2YTI2NmYwZGVmMjYyMGNlM2UwZmM5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._bXqgrfdUyAovphAOigWtILlZBXL883Ua2xjvMQr1A0";

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTBiYjIwYjYwYmFhNjI5MjlkYzc5ZTY0MjYwZGEwOCIsIm5iZiI6MTcyMTk1NTc1Mi45MDA5MzIsInN1YiI6IjY2YTI2NmYwZGVmMjYyMGNlM2UwZmM5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._bXqgrfdUyAovphAOigWtILlZBXL883Ua2xjvMQr1A0'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

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
