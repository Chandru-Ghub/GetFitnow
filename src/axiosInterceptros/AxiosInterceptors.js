import axios from "axios";

const URL = 'http://localhost:3400'
const accessToken = localStorage.getItem('token')
export const authAxios = axios.create({
    baseURL: URL,
    headers:{
        token:accessToken?`Bearer ${accessToken}`:''
    }
})