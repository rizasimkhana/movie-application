import axios from 'axios';

const API_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query, page = 1, type = 'movie') => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apikey: '2bc97645',
        s: query,
        page: page,
        type: type
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movies");
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apikey: '2bc97645',
        i: id
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movie details");
  }
};
