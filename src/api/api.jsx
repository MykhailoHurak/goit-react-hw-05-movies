import axios from 'axios';

const API_KEY = '431eea34ddfd5612dea81358089777f8'; 
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

// ======================================================================================

// Список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
export const getTrending = () => {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  return axios.get('trending/movie/day').then(res => res.data.results);
};

// ======================================================================================

// Запит повної інформації про фільм для сторінки кінофільму
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const getMovieDetails = movieId => {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };

  return axios.get('movie/' + movieId).then(res => res.data);
};
