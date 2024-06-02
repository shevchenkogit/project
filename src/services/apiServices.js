import axios from "axios";

import {baseURL} from "../configs";

const movieDbToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWM4YjA4ZDcxZDc4ZGZmMmMxMjVjNWU2NDQwYjQ4YyIsInN1YiI6IjYzZjExYjU5Y2FhY2EyMDBhMTliMGJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2yuJvQDkj1Lh9IEe433W6yPTVq08Jr0mrVLQpkfR0Ko'
const apiService = axios.create({baseURL})

apiService.interceptors.request.use((config)=>{
    config.headers.Authorization = `bearer ${movieDbToken}`
    return config
})

export {
    apiService
}