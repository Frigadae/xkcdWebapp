import React, {useState, useEffect} from "react";
import { getAPI } from "./API";

function Main() {
    const [comicData, setComicData] = useState({num: 0, title: "", getImg: null, alt: "", day:0, month:0, year:0});
    const [maxNum, setMaxNum] = useState(0);
    const [input, setInput] = useState("");
    let flag = true;

    let onRender = FirstLoad;

    useEffect(() => {
        getAPI.get(`?url=https://xkcd.com/info.0.json`)
        .then(response => {
            const receivedComicData = JSON.parse(response.data);
            console.log(receivedComicData);
            setMaxNum(receivedComicData.num);
            setComicData({num: receivedComicData.num, title: receivedComicData.title, img: receivedComicData.img, alt: receivedComicData.alt,
            day: receivedComicData.day, month: receivedComicData.month, year: receivedComicData.year});
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        if (input > 0 && input > maxNum) {
            flag = false;
        } else {
            flag = true;
            getAPI.get(`?url=https://xkcd.com/${input}/info.0.json`)
            .then(response => {
                const receivedComicData = JSON.parse(response.data);
                console.log(receivedComicData);
                setMaxNum(receivedComicData.num);
                setComicData({num: receivedComicData.num, title: receivedComicData.title, img: receivedComicData.img, alt: receivedComicData.alt,
                day: receivedComicData.day, month: receivedComicData.month, year: receivedComicData.year});
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    return (
        <div id="content">
            <div id="searchDiv">
                <form onSubmit={(event) => {handleSubmit(event)}}>
                    <label>
                        Please enter a number : 
                        <input type="text" placeholder="Enter a number" value={input} onChange={(event) => {setInput(event.target.value)}} 
                        pattern={"[0-9]*"} title="Only numbers can be entered!"></input>
                        <button type="submit">Submit</button>
                    </label>
                </form>
            </div>
            {flag && <DisplayComic comicData={comicData}/>}
            {!flag && <Error/>}
        </div>
    )
}

function DisplayComic(props) {
    return (
        <div id="imageDiv">
            <h3 id="contentHeader">{props.comicData.num}: {props.comicData.title}</h3>
            <img id="contentImg" src={props.comicData.img} alt={props.comicData.alt}></img>
            <p>Comic published on: {props.comicData.day}/{props.comicData.month}/{props.comicData.year}</p>
        </div>
    )
}

function FirstLoad() {
    return (
        <div>
            <h2>Getting the latest comic...</h2>
            <h4>Please wait</h4>
        </div>
    )
}

function Error() {
    return (
        <div>
            <h2>Invalid number</h2>
            <h4>Please try again another time. Sorry for the inconvenience</h4>
        </div>
    )
}

export default Main;