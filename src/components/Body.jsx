import React from "react";
//import { getLatestComicData, getRandomComicData } from "./API";
import { getAPI } from "./API";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {getImg: null};
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
        this.setState({ getImg: image });
    }
    
    componentWillUnmount() {
        
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
                    <h1>Body</h1>
                    <img src={this.state.getImg.img} alt="A XKCD comic"></img>
                </div>
            )
        }
    }
}

export default Body;
