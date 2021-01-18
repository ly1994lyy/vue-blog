import axios from 'axios'
import store from '../store'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 引入样式

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

//请求拦截器
http.interceptors.request.use(config => {
  NProgress.start()
  store.state.loading = true
  return config
}, error => {
  NProgress.done()
  store.state.loading = false
  return Promise.reject(error)
})

//响应拦截器
http.interceptors.response.use(res => {
  NProgress.done()
  store.state.loading = false
  return res
}, error => {
  console.log('拦截器2', error.response.data)
  NProgress.done()
  store.state.loading = false
  return Promise.reject(error)
})

export const get = (url, params) => {
  return http.get(url, { params })
}

export const post = (url, params) => {
  return http.post(url, params)
}

export const update = (url, params) => {
  return http.put(url, params)
}

export const del = (url) => {
  return http.delete(url)
}
