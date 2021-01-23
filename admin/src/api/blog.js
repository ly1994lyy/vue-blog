import { get, post, update, del } from '../utils/http';

export const getBlog = (params) => {
  return get('/blog', params);
};

export const getBlogById = (id) => {
  return get(`/blog/${id}`);
};

export const createBlog = (params) => {
  return post('/blog', params);
};

export const putBlog = (id, params) => {
  return update(`/blog/${id}`, params);
};

export const delBlog = (id) => {
  return del(`/blog/${id}`);
};
