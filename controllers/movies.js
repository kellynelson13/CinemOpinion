const express = require("express");
const movieRouter = express.Router();
const Movie = require('../models/movies.js');

//========================
////// ROUTES ///////////
//=======================

//// SEED ////
const movieSeed = require("../models/movieSeed");

movieRouter.get('/seed', (req,res) => {
    Movie.create(movieSeed, (error, data) => {
        res.redirect('/movies');
    })
})

///// INDEX //////
movieRouter.get('/', (req, res) => {
    Movie.find({}, (error, foundMovies) => {
        res.render('movies/index.ejs', {
            movies: foundMovies
        })
    })
})

/////// NEW ////////
movieRouter.get('/new', (req, res) => {
    res.render('movies/new.ejs');
})

////// CREATE ////////
movieRouter.post('/', (req, res) => {
    Movie.create(req.body, (error, createdMovie) => {
        res.send(createdMovie)
    })
})

module.exports = movieRouter;