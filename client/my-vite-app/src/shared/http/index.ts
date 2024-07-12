import axios from "axios";

export const API_URL = "http://localhost:8080";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  
});

$api.interceptors.request.use((config) => {

  if (localStorage.getItem("accessToken") !== null) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
  }
  return config;
  
});

export default $api;