import React from "react";
//import { getLatestComicData, getRandomComicData } from "./API";
import { getAPI } from "./API";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {getImg: null, maxNum: 0, searchNum: ""};
        this.getNewComic = this.getNewComic.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    async componentDidMount() {
        const image = await getAPI.get()
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
        console.log(image.num);
        this.setState({ getImg: image, maxNum: image.num });
    }

    async getNewComic(element) {
        element.preventDefault();
        if (this.state.searchNum > this.state.maxNum) {
            console.warn("Number entered exceeds max number! Request aborted!");
            return;
        }
        console.log(`Number entered: ${this.state.searchNum}`);
        const image = await getAPI.get(`?num=${this.state.searchNum}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
        console.log(image.num);
        this.setState({ getImg: image});
    }

    onChange(element) {
        this.setState({searchNum: element.target.value});
    }

    render() {
        if (this.state.getImg == null) {
            return (
                <div>
                    <h1>Body</h1>
                    <h3>Loading an image...</h3>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Note: The latest comic number is: {this.state.maxNum}</p>
                    <p>Submitting any number higher than the given number, zero or none will display the latest comic</p>
                    <form onSubmit={this.getNewComic}>
                        <input type="text" placeholder="Enter a number" value={this.state.searchNum} onChange={this.onChange}></input>
                        <button type="submit" onClick={this.getNewComic}>Submit</button>
                    </form>
                    <br></br>
                    <img src={this.state.getImg.img} alt="A XKCD comic"></img>
                </div>
            )
        }
    }
}

export default Body;
