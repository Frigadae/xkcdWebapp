import React, {useState, useEffect} from "react";
import { getAPI } from "./API";

function Main() {
    const [comicData, setComicData] = useState({getImg: null, maxNum: 0, searchNum: ""});

    return (
        <div id="content">
            <div id="searchDiv">
                <p>The latest comic published has the number: {this.state.maxNum}</p>
                <form onSubmit={this.getNewComic}>
                    <label>
                        Please enter a number : 
                        <input type="text" placeholder="Enter a number" value={this.state.searchNum} onChange={this.onChange}></input>
                        <button type="submit" onClick={this.getNewComic}>Submit</button>
                    </label>
                    <p>Tip: You can enter nothing or 0 to fetch the latest comic.</p>
                </form>
            </div>
            <div id="imageDiv">
                <h3 id="contentHeader">{this.state.getImg.num}: {this.state.getImg.title}</h3>
                <img id="contentImg" src={this.state.getImg.img} alt={this.state.getImg.alt}></img>
                <p>Comic published on: {this.state.getImg.day}/{this.state.getImg.month}/{this.state.getImg.year}</p>
            </div>
        </div>
    )
}

export default Main;