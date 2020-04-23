import axios from "axios";
import { message } from "antd";
import { createHashHistory } from "history";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "/admin/api"
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response.status === 401) {
      const history = createHashHistory();
      history.push("/login");
    }
    message.error(err.response.data.message);
    return Promise.reject(err);
  }
);

http.interceptors.request.use(
  (config) => {
    if (localStorage.admintoken) {
      config.headers.Authorization = "Bearer " + localStorage.admintoken;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const get = (url, params) => {
  return http.get(url, { params });
};

export const post = (url, data) => {
  return http.post(url, data);
};

export const put = (url, data) => {
  return http.put(url, data);
};

export const del = (url) => {
  return http.delete(url);
};
