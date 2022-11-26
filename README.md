# Streaming webapp clone (Netflix)

- Demo: <https://streamingclone.onrender.com/login>

This repo consists of frontend & backend part of my Netflix clone using [The MovieDB Api](https://www.themoviedb.org/documentation/api) for movies & shows details along with **CRUD** functionality for add to list feature. 

### ***Table of Contents***
- [Technologies used](#technologies-used)
- [Runing Project Locally](#user-stories)
- [License](#technologies-used)


### ***Technologies used***

- Frontend 
  -  **React Js**, Redux
  -  HTML, Tailwind CSS
  -  JavaScript 
- Backend
  -  Nodejs
  -  ExpressJS
- Database
  - MongoDB
  - Mongoose
- Authentication ↔️ Firebase
- Deployed using onRender, Cyclic


### ***User Stories***

- User can ***Signin*** / ***Signup*** and create account.
- User can the see upcoming and trending movies/shows. Data updates periodically as per TMDB api.
- User can hover on a movie/show and an enlarged box appears having ***add to list*** feature. It also displays the title, add to list, Play, like, dislike.
- ***My List*** page fetches user added shows from database(mongodb) and shows the movie/show. ***CRUD*** operation included

### ***Runing Project Locally***
```
git clone https://github.com/vaibhavgarg237/netflixClone.git
cd netflixClone
```
  -  ***Client***
```
cd client
npm install
npm run start
```
  -  ***Server***
```
cd server
npm install
nodemon server.js
```

### **License**
  
All assets/shows/logos belongs to their respective owners i.e Netflix / TMDB or others. I only made this for learning and development purposes not for distribution of any copyright material.