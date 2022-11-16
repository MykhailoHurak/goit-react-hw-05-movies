import axios from 'axios';

const API_KEY = '431eea34ddfd5612dea81358089777f8'; 
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

// Список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
export const getTrending = () => {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  return axios.get('trending/movie/day').then(res => res.data.results);
};
