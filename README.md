# Let's watch a movie!

**Sprint duration:** 
Two days. 03-08 to 05-08
**Sprint goal**:
Using the omdbapi API http://www.omdbapi.com/ create a ReactApp that allows you to search for movies by title (ex: Batman) and display a list of results (title, year and image).

##Let's start! [https://dev.d3fl9eb3av7ddi.amplifyapp.com/](https://dev.d3fl9eb3av7ddi.amplifyapp.com/)

 - Clone this repository.
 - Go to *lets_watch_a_movie* folder
 - Add an .env file in root folder (let's watch a movie), and add the following enviroment variable: REACT_APP_APIKEY="http://www.omdbapi.com/?apikey=[yourkey]&"
 - Run in terminal `npm install`
 - Run in terminal `npm start`
 - Happy hacking! <3 

## Functional requirements

Each result must be clickable and when clicked it will show more details of the result according to the data available in the API. In addition, the application must allow you to bookmark each of the movies (save them in localStorage) and be able to see a list of them.

## Non functional requirements

-   Responsive Web App.
-   Enviroment variables must be hidden,


## Tech Stack


### Frontend:
 - React Js
 - JavaScript ES6
 - MaterialUI (UI CSS Framework)
 - Axios (Http request)
 - Async Functions & Promises
 - OMDB Api
 
### Backend:
- Amplify AWS CloudFront & S3

### Prototipo de baja fidelidad:

#InProgress.-
## :collision: AWS CLOUDFRONT DEPLOY :collision:

- :warning: Asegúrate de tener una cuenta de AWS services  :warning:

- Ejecuta en la terminal `npm install -g @aws-amplify/cli`

-  `Amplify Configure` e inicia sesión en tu  cuenta de AWS 

- `Amplify Init` en la raíz de tu proyecto, para inicializarlo

- Ejecuta `Amplify add hosting`  para agregar el servicio de hosting.

- Select AWS CloudFront & S3 Bucket

- Select DEV option for HTTP or PROD for HTTPS.

- Ejecuta `Amplify publish`