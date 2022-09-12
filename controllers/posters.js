import express from 'express';
const posterRouter = express.Router(); 
import fetch from 'node-fetch';


posterRouter.get('/', (req, res) => {
    res.send("posters route working")
})

function getMovieInfo (movieTitle) {

    const apiURL = 'http://www.omdbapi.com/?apikey=212bc66d&s=${movieTitle}'

    fetch(apiURL, {
        method: 'GET',
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data)
        res.send(data)
    })
}

// getMovieInfo("up")



export default posterRouter;