import axios from "axios";

const URL = 'https://getfit-gktq.onrender.com'
const accessToken = localStorage.getItem('token')
export const authAxios = axios.create({
    baseURL: URL,
    headers:{
        token:accessToken?`Bearer ${accessToken}`:''
    }
})