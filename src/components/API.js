import axios from "axios";

let latestComic;
let latestNum;

const comicPromise = Promise.all()

latestComic = await axios.get("https://xkcd.com/info.0.json")
.then(response => {
    return response.data;
})
.catch(error => {console.log(error)});

console.log(latestComic);
