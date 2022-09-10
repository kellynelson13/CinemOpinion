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

////// Update /////////
movieRouter.put('/:id', (req, res) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedMovie) => {
        
        const sum = updatedMovie.writing + 
        updatedMovie.direction +
        updatedMovie.cinematography +
        updatedMovie.acting +
        updatedMovie.editing +
        updatedMovie.sound +
        updatedMovie.soundtrack +
        updatedMovie.production_design +
        updatedMovie.casting +
        updatedMovie.effects;
        
        updatedMovie.overall = sum / 10;
        updatedMovie.save();
        res.redirect(`/movies/${req.params.id}`)
    })
})

////// CREATE ////////
movieRouter.post('/', (req, res) => {
    Movie.create(req.body, (error, createdMovie) => {
        
        const sum = createdMovie.writing + 
        createdMovie.direction +
        createdMovie.cinematography +
        createdMovie.acting +
        createdMovie.editing +
        createdMovie.sound +
        createdMovie.soundtrack +
        createdMovie.production_design +
        createdMovie.casting +
        createdMovie.effects;
        
        createdMovie.overall = sum / 10;
        createdMovie.save();

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