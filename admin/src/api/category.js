import { get, post, put, del } from "../utils/http"

export const getCate = (params) => {
    return get('categories',params)
}

export const getCateById = (id) => {
    return get(`categories/${id}`)
}

export const createCate = (data) => {
    return post('categories',data)
}

export const updataCate = (id,data) => {
    return put(`categories/${id}`, data);
}

export const delCate = (id) => {
    return del(`categories/${id}`)
}