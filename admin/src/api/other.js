import { get,post,put } from "../utils/http"

export const getOther = (keyWord) =>{
    return get('/rest/other',keyWord)
}

export const getOtherById = (id) =>{
    return get(`/rest/other/${id}`)
}

export const createOther = (data) =>{
    return post('/rest/other',data)
}

export const putOther = (id,data) =>{
    return put(`/rest/other/${id}`,data)
}
