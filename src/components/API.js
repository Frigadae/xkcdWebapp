import axios from "axios";

const getAPI = axios.create({
    baseURL: "https://backendfunction.azurewebsites.net/api/httpTrigger",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:"AUTH KEY HERE!",
    }  
})

export {getAPI};
