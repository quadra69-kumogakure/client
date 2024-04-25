import axios from "axios";

export const apiRequest = axios.create({
    baseURL : "https://server-gp.daffabaihaqi.online"
});


export const serverRequest = axios.create({
    baseURL : ""
});