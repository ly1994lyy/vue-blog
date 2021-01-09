import { get, post, update, del } from '../utils/http';

export const getCate = (params) => {
  return get('/category', params);
};
