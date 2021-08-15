import React from "react";
//import { getLatestComicData, getRandomComicData } from "./API";
import { getAPI, getComic } from "./API";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {getImg: null};
    }
    
    async componentDidMount() {
        const catImg = await getAPI.get()
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
        this.setState({ getImg: catImg });
    }
    
    componentWillUnmount() {
        
    }

    render() {
        if (this.state.getImg == null) {
            return (
                <div>
                    <h1>Body</h1>
                    <h3>Loading a cat image...</h3>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Body</h1>
                    <img src={this.state.getImg.url} alt="A cat"></img>
                </div>
            )
        }
    }
}

export default Body;
