import axios from "axios";

export const apiRequest = axios.create({
    baseURL : "http://localhost:3000/"
})

export const serverRequest = axios.create({
    baseURL : ""
});