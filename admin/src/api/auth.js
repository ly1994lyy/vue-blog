import { post } from '../utils/http'

export const AdminLogin = (params) => {
  return post('/login', params)
}