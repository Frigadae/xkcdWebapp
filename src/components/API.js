import axios from "axios";

const getAPI = axios.create({
    baseURL: "http://localhost:5000/getData",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:"AUTH KEY HERE!",
    }  
})

export {getAPI};
