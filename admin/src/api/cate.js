import { get, post, update, del } from '../utils/http';

export const getCate = (params) => {
  return get('/category', params);
};

export const getCateById = (id) => {
  return get(`/category/${id}`);
};

export const createCate = (params) => {
  return post('/category', params);
};

export const putCate = (id, params) => {
  return update(`/category/${id}`, params);
};

export const delCate = (id) => {
  return del(`/category/${id}`);
};
