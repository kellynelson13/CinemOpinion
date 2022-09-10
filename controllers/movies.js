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

/////// DELETE ///////
movieRouter.delete('/:id', (req, res) => {
    Movie.findByIdAndDelete(req.params.id, (error, deletedMovie) => {
        res.redirect('/movies');
    })
})

////// CREATE ////////
movieRouter.post('/', (req, res) => {
    Movie.create(req.body, (error, createdMovie) => {
        res.redirect('/movies');
    })
})

/////// EDIT ///////////
movieRouter.get('/:id/edit', (req, res) => {
    Movie.findById(req.params.id, (error, foundMovie) => {
        res.render('movies/edit.ejs', {
            movie: foundMovie
        })
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