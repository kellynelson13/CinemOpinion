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
        res.redirect('/movies');
    })
})

////// SHOW /////////
movieRouter.get('/:id', (req, res) => {
    Movie.findById(req.params.id, (error, foundMovie) => {
        res.render('movies/show.ejs', {
            movie: foundMovie
        })
    })
})

module.exports = movieRouter;