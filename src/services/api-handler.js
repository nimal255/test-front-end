import axios from 'axios';
// import { store } from "../redux/storeConfig/store";
const API_BASE_URL = 'http://localhost:3001';

export const performAuthRequest = async (method, url, params, auth) => {

  const body = method === 'get' ? 'params' : 'data'
  const config = {
      method,
      url,
      baseURL: API_BASE_URL,
      [body]: params || {}
  }
  config.headers = {
      "Content-Type": "application/json; charset=utf-8",
      // Authorization: "Bearer " + token
  }
  return axios.request(config); 
}

export const performRequest = async (method, url, params, auth) => {
  const token = localStorage.getItem("jwtToken");

  const body = method === "get" ? "params" : "data";
  const config = {
      method,
      url,
      baseURL: API_BASE_URL,
      [body]: params || {},
  };
  config.headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Bearer " + token
  };
  return axios.request(config);
};
