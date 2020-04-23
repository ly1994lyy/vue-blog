import { get,post,put } from "../utils/http"

export const getAbout = (keyWord) =>{
    return get('/rest/about',keyWord)
}

export const getAboutById = (id) =>{
    return get(`/rest/about/${id}`)
}

export const createAbout = (data) =>{
    return post('/rest/about',data)
}

export const putAbout = (id,data) =>{
    return put(`/rest/about/${id}`,data)
}
