import axios from "axios";

/*

// Get latest comic json data
async function getLatestComicData() {
    const latestComic = await axios.get("info.0.json")
    .then(response => {
        console.log(response.data);
        return response.data;
    })
    .catch(error => {console.log(error)});
    return latestComic;
}

//Get random comic json data
async function getRandomComicData(num = 1) {
    const randomComic = await axios.get(`${num}/info.0.json`)
    .then(response => {
    return response.data;
    })
    .catch(error => {console.log(error)});
    return randomComic;
}

//Print code to validate if json is received

//console.log(await getLatestComicData());
//console.log(await getRandomComicData(500));

//export {getLatestComicData, getRandomComicData};
*/


const getAPI = axios.create({
    baseURL: "http://localhost:5000/getData",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:"AUTH KEY HERE!",
    }  
})

export {getAPI};
