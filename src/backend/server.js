const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const fs = require("fs");
const url = require("url")

const portNum = 5000;
const app = express();

const endpointStart = "https://xkcd.com/";
const endpointEnd = "info.0.json";

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};

app.get('/getData', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const comicNum = req.query.num;

    if (comicNum == null || comicNum == "" || comicNum == 0) {
        const response = await fetch(endpointStart + endpointEnd, fetchOptions).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        });
        const jsonResponse = await response;
        res.json(jsonResponse);
    } else {
        const response = await fetch(endpointStart + comicNum + "/" +endpointEnd, fetchOptions).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        });
        const jsonResponse = await response;
        res.json(jsonResponse);
    }
});

app.get("", cors(corsOptions), async (req, res) => {
    fs.readFile("localhostPage.html", (error, data) => {
        res.writeHead(200, {'Content-Type': "text/html"});
        res.write(data);
        res.end();
    });
});

app.listen(portNum, () => {
    console.log(`Example app listening at http://localhost:${portNum}`);
});
