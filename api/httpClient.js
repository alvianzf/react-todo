import axios from 'axios'

const get = (url) => {
    return axios(url)
}

const post = (url = '', data='', config ={}) => {
    return axios.post(url, data, config)
}

const put = (url = '', data='', config ={}) => {
    return axios.put(url, data, config)
}

const del = (url = '', config = {}) => {
    return axios.delete(url, config)
}

const HttpClient = {
    get,
    post,
    put,
    delete: del
}

export {HttpClient}