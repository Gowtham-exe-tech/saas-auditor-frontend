/* Here i use axios to attach JWT automatically,
   So it enables "auto logout" when token expires*/ 

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // backend URL is referred here..
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();

      // to prevent redirect
      if (window.location.pathname !== "/login") {
        window.location.replace("/login");
      }
    }

    return Promise.reject(error);
  }
);

export default api;