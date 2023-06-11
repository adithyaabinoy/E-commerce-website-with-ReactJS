import axios from "axios";

const instance = axios.create({
    baseURL: '...' //the api(cloud fn) url
});

export default instance;