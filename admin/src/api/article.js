import { get,post,del,put } from "../utils/http"

export const getArticle = (keyWord) =>{
    return get('/rest/articles',keyWord)
}

export const getArticleById = (id) =>{
    return get(`/rest/articles/${id}`)
}

export const createArticle = (data) =>{
    return post('/rest/articles',data)
}

export const putArticle = (id,data) =>{
    return put(`/rest/articles/${id}`,data)
}

export const delArticle = (id) =>{
    return del(`/rest/articles/${id}`)
}