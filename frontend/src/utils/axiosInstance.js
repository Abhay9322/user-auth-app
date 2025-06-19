import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:500/api',
    headers:{
        Authorization: localStorage.getItem('token') || '',
    }
});

export default instance;