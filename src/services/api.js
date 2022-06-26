import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: movie/now_playing?api_key=7f2cea6111355b8918f995e7db54d01e&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
