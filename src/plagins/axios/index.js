import axios from "axios";
import interceptors from "./intercepters";

// настройки для всех запросов на данный url
const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // params: {
    //     apikey: process.env.VUE_APP_API_KEY,
    //     plot: "full"
    // }
});

interceptors(instance);

export default instance;