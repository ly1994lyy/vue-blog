import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3008/admin/',
  timeout: 5000
})

//请求拦截器
http.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

//响应拦截器
http.interceptors.response.use(res => {
  return res
}, error => {
  return Promise.reject(error)
})

export const get = (url, params) => {
  return http.get(url, params)
}

export const post = (url, params) => {
  return http.post(url, { params })
}

export const update = (url, params) => {
  return http.put(url, { params })
}

export const del = (url) => {
  return http.delete(url)
}
