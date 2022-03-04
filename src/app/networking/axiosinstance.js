import {Constants} from "../constant";
import axios from "axios";

let getToken = async () => {
    try {
        let data = await localStorage.getItem("token");
        return data;
    } catch (error) {
        console.log(error);
    }
}

const axiosInstance = axios.create({
    baseURL: Constants.baseUrl,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(async (config) => {
    let token = await getToken();
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance
