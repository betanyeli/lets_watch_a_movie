# Let's watch a movie! :movie_camera:

Deploy: [https://dev.d3fl9eb3av7ddi.amplifyapp.com/](https://dev.d3fl9eb3av7ddi.amplifyapp.com/)
  
**Sprint duration:** :calendar:

Two days. 03-08 to 05-08

**Sprint goal**: :bar_chart:

Using the omdbapi API http://www.omdbapi.com/ create a ReactApp that allows you to search for movies by title (ex: Batman) and display a list of results (title, year and image).

**Kanban board** : :chart_with_downwards_trend:
You can review the pending requirements in the "TO-DO" column
[https://github.com/betanyeli/lets_watch_a_movie/projects/1](https://github.com/betanyeli/lets_watch_a_movie/projects/1)

  

### Let's start!  :smiley:

- Clone this repository.

- Go to *lets_watch_a_movie* folder

- Add an .env file in root folder (let's watch a movie), and add the following enviroment variable: REACT_APP_DATA_APIKEY="http://www.omdbapi.com/?apikey=[yourkey]&"

- Run in terminal `npm install`

- Run in terminal `npm start`

- Happy hacking! <3

  

## Functional requirements

Each result must be clickable and when clicked it will show more details of the result according to the data available in the API. In addition, the application must allow you to bookmark each of the movies (save them in localStorage) and be able to see a list of them.

## Non functional requirements

- Responsive Web App.
- Enviroment variables must be hidden,

  
## Tech Stack

### Frontend:

- React Js with Hooks State management

- JavaScript ES6

- MaterialUI (UI CSS Framework)

- Axios (Http request)

- Async Functions & Promises

- OMDB Api

### Backend:
- Amplify AWS CloudFront & S3
### :scroll: low fidelity prototype: :scroll:
-Pending... :construction:

### :rainbow: color palette :rainbow:
![palette_color](src/Assets/palette.PNG)


Develop with love by Beta :heart_eyes: