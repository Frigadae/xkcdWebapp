import React from "react";

class Body extends React.Component {
    render() {
        return (
            <div>
                <h1>Body</h1>
                <h3>You opened this page on: {new Date().toLocaleTimeString()}</h3>
            </div>
        )
    }
}

export default Body;
