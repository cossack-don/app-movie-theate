import axios from "axios";

// настройки для всех запросов на данный url
const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    params: {
        apikey: process.env.VUE_APP_API_KEY,
        plot: "full"
    }
});

export default instance