import axios from "axios";

/* Get latest comic json data*/
async function getLatestComicData() {
    const latestComic = await axios.get("https://xkcd.com/info.0.json")
    .then(response => {
    return response.data;
    })
    .catch(error => {console.log(error)});
    return latestComic;
}

/* Get random comic json data */
async function getRandomComicData(num) {
    const randomComic = await axios.get(`https://xkcd.com/${num}/info.0.json`)
    .then(response => {
    return response.data;
    })
    .catch(error => {console.log(error)});
    return randomComic;
}

/* Print code to validate if json is received */
/*
console.log(await getLatestComicData());
console.log(await getRandomComicData(500));
*/

export {getLatestComicData, getRandomComicData};