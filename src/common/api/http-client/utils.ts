import axios, { type CreateAxiosDefaults } from "axios";

export function createHttpClient(config?: CreateAxiosDefaults) {
  return axios.create({
    baseURL: "/api",
    timeout: 10_000,
    ...config,
  });
}
