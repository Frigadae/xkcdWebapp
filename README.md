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

## 2021 Update
When I first built this ReactJs app in 2020. I did not know what exactly the workings of React does, as long as it worked I was happy. 
This time I understood the inner workings of React far more and proceeded to rewrite my code.\
Originally the Main component was class-based. While this is perfectly fine. I see the benefits of functional components outweigh class-based components. 
The biggest appeal is it is simpler to set up and removes the need for a constructor or binding functions (without resorting to arrow functions).
The rewrite took two days and was completed on 1 June 2021 and deployed to Netlify.

## Website link
You can access the web application and search up XKCD comics [here](https://xkcdsearchwebapp.netlify.app/).

## Project demo
You can find a demonstration of the webapp in action [here](https://www.youtube.com/watch?v=v_YiEfR_okA).

## Backend repo
The backend service code can be located in this [repo](https://github.com/wang-yi-yao/httpTriggerForXKCDwebapp).

## Technologies used
- Front end is built using Javascript and React.js and hosted on Netlify.
- Code is maintained using Git on both the Github repository and the local repository.
- Backend is built using C# and .Net and is hosted on Microsoft Azure's functions service.

## Acknowledgements
I would like to thank William Samaya from dev.to for showing how to overcome the CORS policy problem.
Without his guide I would not be able to utilise the XKCD API for this project.\
See: https://dev.to/will_yama/how-to-overcome-cors-errors-2nh9 


XKCD is by Randall Munroe.\
Please visit [xkcd.com](https://xkcd.com) to directly access the source materials.\
The XKCD api can be found [here](https://xkcd.com/json.html)
