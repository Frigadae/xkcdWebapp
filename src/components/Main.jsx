import React, {useState, useEffect} from "react";
import { getAPI } from "./API";

function Main() {
    const [comicData, setComicData] = useState({num: 0, title: "", getImg: null, alt: "", day:0, month:0, year:0});
    const [maxNum, setMaxNum] = useState(-1);
    const [input, setInput] = useState("");
    const [flag, setFlag] = useState(true);

    //makes a HTTP request when component mounts for the first time
    useEffect(() => {
        getAPI.get(`?num=0`)
        .then(response => {
            const receivedComicData = JSON.parse(response.data);
            setMaxNum(receivedComicData.num);
            setComicData({num: receivedComicData.num, title: receivedComicData.title, img: receivedComicData.img, alt: receivedComicData.alt,
            day: receivedComicData.day, month: receivedComicData.month, year: receivedComicData.year});
            setFlag(true);
        })
        .catch(error => {
            console.log(error);
            setFlag(false);
        })
    }, []);

    //makes a HTTP request when submit button is clicked
    function handleSubmit(event) {
        event.preventDefault();
        let query = ``;

        if (Number.parseInt(input) === 0) {
            query = `?num=0`;
        } else if (input > 0 && input <= maxNum) {
            query = `?num=${input}`;
        } else {
            setFlag(false);
        }

        getAPI.get(query)
        .then(response => {
            const receivedComicData = JSON.parse(response.data);
            setComicData({num: receivedComicData.num, title: receivedComicData.title, img: receivedComicData.img, alt: receivedComicData.alt,
            day: receivedComicData.day, month: receivedComicData.month, year: receivedComicData.year});
            setFlag(true);
        })
        .catch(error => {
            console.log(error);
            setFlag(false);
        })
    }

    //returns the components
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
            {flag?<DisplayComic comicData={comicData} maxNum={maxNum}/>:<Error/>}
            <sub>Tip: you can enter 0 to get the latest comic</sub>
        </div>
    )
}

//child component that displays the comic
function DisplayComic(props) {
    return (
        <div id="imageDiv">
            <h3 id="contentHeader">{props.comicData.num}: {props.comicData.title}</h3>
            <img id="contentImg" src={props.comicData.img} alt={props.comicData.alt}></img>
            <p>Comic published on: {props.comicData.day}/{props.comicData.month}/{props.comicData.year}</p>
            <p>The latest comic number is: {props.maxNum}</p>
        </div>
    )
}

//child component that displays an error
function Error() {
    return (
        <div>
            <h2>Unable to display comic, please try again</h2>
            <ul>
                <h4>Possible reasons:</h4>
                <li>If you entered a number greater than the max number, the comic cannot be fetched as it does not exist yet.</li>
                <li>The backend server may be offline. Please wait until this is resolved.</li>
                <li>The XKCD API may be offline. Please wait until this is resolved.</li>
            </ul>
        </div>
    )
}

export default Main;