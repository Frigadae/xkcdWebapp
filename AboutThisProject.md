# About this Project

## Background
I built this project after attending a Summer Of Tech event which showcases how Vue.js web apps can be used to communicate with APIs via the internet.\
(Hello Wildeye! Thank you for Javascript and the IoT lecture!)

Before this, I was aware of the existence of React.js but never really understood it or bothered to give it a try.
I now have a basic understanding of React.js. The Javascript code takes the HTML code and "renders" it onto the browser page.
This project is not perfect, but it is a good start.

I had always enjoyed browsing XKCD comics. It's filled with science jokes and presented in a simple visual format.
Although the XKCD website keeps an archive with the titles displayed. It would be nice to search for a comic instead of browsing the archive.
While numbers are harder to remember than titles, it does make the searching easier.

## How to start this web app
This React app requires a backend server to access the API. Without it the CORS policy in the browser blocks the fetch requests.

1. Before starting, run ``npm install`` in the root folder and in ``backend`` folder to install dependencies.
2. In the ``backend`` folder and run ``server.js`` using a powershell or terminal window. It should run on Localhost:5000.
3. Open a new powershell or terminal window in the root folder and run ``npm start`` to start the webapp.
4. The React app should now be able to make fetch requests. You can now search XKCD comics by number.

## Project demo
You can find a demonstration of the webapp in action [here](https://www.youtube.com/watch?v=v_YiEfR_okA)

## Acknowledgements
I would like to thank William Samaya from dev.to for showing how to overcome the CORS policy problem.
Without his guide I would not be able to utilise the XKCD API for this project.\
See: https://dev.to/will_yama/how-to-overcome-cors-errors-2nh9 


XKCD is by Randall Munroe.\
Please visit [xkcd.com](https://xkcd.com) to directly access the source materials.\
The XKCD api can be found [here](https://xkcd.com/json.html)
