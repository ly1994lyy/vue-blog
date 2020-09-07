import axios from 'axios'
import { Message } from 'element-ui';

const http =  axios.create({
    baseURL:'http://localhost:3008',
})

http.interceptors.request.use((config) => {
    return config
}, (error) => {
        return Promise.reject(error);
})


http.interceptors.response.use((res) => {
    return res
}, (error) => {
        if (error.response.data.statusCode === 401) {
            Message.error(error.response.data.message)
        }
        return Promise.reject(error)
})


export default http