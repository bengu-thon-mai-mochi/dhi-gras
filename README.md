# Temperature at Playgrounds

This website allows Copenhageners to see the temperature for next 12 hours in a chosen playground. Hovering over the temperature time-series graph displays chance of rain at that point in time. Use this app and you'll never get caught in the rain again! Unless you want to. :)

[Live Demo](https://musing-archimedes-5dcb35.netlify.app/).

## How to Use

1. Clone the repo to your computer.
2. In your terminal, `cd` into the project directory.
4. Get an access token from (https://www.mapbox.com/) and add the api key to `.env.example` where its specified. Save.
5. Rename the file to `.env`.
5. In your terminal, run `npm i`.
6. Once the packages are installed, run `npm start`.
7. Visit http://localhost:3000 in your browser. 

## Stack highlight

I used all the libraries and tech stack recommended in the brief for this project. 
 * React
 * React-router
 * Material UI
 * Mapbox GL JS
 * Recharts

In addition to this, I incorporated Axios library and Moment. 
I love using axios for making Api calls because it automates the JSON data transformation. Moment library also comes in handy when formatting dates.

For charting library I used recharts. It was my first time using a charting library but I loved how recharts documentation is nicely organised and easy to understand and follow.

## Future Developments

I would like to work on making more interactive interface for the chart page. I think there can be so much to do with the data you receive from user interaction with the graph. 

For example, associating weather summary for each hour with colors responding to 'cloudy' or 'clear sky' and making graph change color. Or, using probability of rain to change cursor symbol to an umbrella to clear sky icon. 

Furthermore, responsiveness can be adjusted and aria-labels can be integrated. 
