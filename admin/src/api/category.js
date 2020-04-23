import { get,post,del,put } from "../utils/http"

export const getCategory = (keyWord) =>{
    return get('/rest/categories',keyWord)
}

export const getCategoryById = (id) =>{
    return get(`/rest/categories/${id}`)
}

export const createCategory = (data) =>{
    return post('/rest/categories',data)
}

export const putCategory = (id,data) =>{
    return put(`/rest/categories/${id}`,data)
}

export const delCategory = (id) =>{
    return del(`/rest/categories/${id}`)
}