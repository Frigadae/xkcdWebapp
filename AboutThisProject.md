# About this Project

## Introduction
I built this project after attending a Summer Of Tech event which showcases how Vue.js web apps can be used to communicate with APIs via the internet.
(Hello Wildeye! Thank you for Javascript and the IoT lecture!)

Before this, I was aware of the existence of React.js but never really understood it or bothered to give it a try.
I now have a basic understanding of React.js. The Javascript code takes the HTML code and "renders" it onto the browser page.
This project is not perfect, there are many improvements that can be made. But it is a good start.


## How to start this web app
This React app requires a backend server to access the API. Without it the CORS policy in the browser blocks the fetch requests.

1. Go to ``src/backend`` and run ``server.js`` using cmd/powershell or terminal. It should run on Localhost:5000
2. Go back to the root folder and run ``npm start`` using cmd/powershell or terminal.
3. The React app should now be able to make fetch requests. You can now search XKCD comics by number.


## Acknowledgements
I would like to thank William Samaya from dev.to for showing how to overcome the CORS policy problem.
Without his guide I would not be able to utilise the XKCD API for this project.

See: https://dev.to/will_yama/how-to-overcome-cors-errors-2nh9 


XKCD is by Randall Monroe.

Please visit [xkcd.com](https://xkcd.com) to directly access the source materials.

The XKCD api can be found [here](https://xkcd.com/json.html)
