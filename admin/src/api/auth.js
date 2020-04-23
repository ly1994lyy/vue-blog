import {post,get,del} from "../utils/http"

export const login = (data)=>{
    return post('/login',data)
}

export const getUser = (params)=>{
    return get('/rest/user',params)
}

export const delUser = (id)=>{
    return del(`/rest/user/${id}`)
}