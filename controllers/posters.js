import express from 'express';
const posterRouter = express.Router(); 
import fetch from 'node-fetch';


posterRouter.get('/', (req, res) => {
    res.render("movies/posters.ejs") 
})

posterRouter.post('/allPosters', (req, res) => {
    res.send("working")
    // console.log(req.body)
    // const movie = req.body.title;
    // const apiURL = 'http://www.omdbapi.com/?apikey=212bc66d&s=${movie}'

    // fetch(apiURL, {
    //     method: 'GET',
    // })
    // .then((res) => {
    //     return res.json();
    // })
    // .then((data) => {
    //     console.log(data)
    //     // res.send(data)
        
    // })
})







// function getMovieInfo (res, req, movieTitle) {

//     const apiURL = 'http://www.omdbapi.com/?apikey=212bc66d&s=${movieTitle}'

//     fetch(apiURL, {
//         method: 'GET',
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data)
//         res.send(data)
//     })
// }

//getMovieInfo("up")



export default posterRouter;