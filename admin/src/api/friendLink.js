import { get,post,put,del } from "../utils/http"

export const getFriendLink = () =>{
    return get('/rest/friendlink')
}

export const getFriendLinkById = (id) =>{
    return get(`/rest/friendlink/${id}`)
}

export const createFriendLink = (data) =>{
    return post('/rest/friendlink',data)
}

export const putFriendLink = (id,data) =>{
    return put(`/rest/friendlink/${id}`,data)
}

export const delFriendLink = (id)=>{
    return del(`/rest/friendlink/${id}`)
}