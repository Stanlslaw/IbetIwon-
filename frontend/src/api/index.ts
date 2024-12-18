import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend.ibetiwon.ru/api",
});

export const userApi = axios.create({
  baseURL: api.defaults.baseURL + "/user",
});
