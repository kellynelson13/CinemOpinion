const express = require("express");
const showsRouter = express.Router();
const Shows = require("../models/shows");

/////// INDEX ///////////
showsRouter.get('/', (req, res) => {
    Shows.find({}, (error, foundShows) => {
        res.render('shows/index.ejs', {
            shows: foundShows,
        })
    })
})

//////// NEW //////////
showsRouter.get('/new', (req, res) => {
    res.render('shows/new.ejs')
})

/////// DELETE ////////
showsRouter.delete('/:id', (req, res) => {
    Shows.findByIdAndDelete(req.params.id, (error, deletedShow) => {
        res.redirect('/shows')
    })
})

//////// UPDATE ///////
showsRouter.put('/:id', (req, res) => {
    Shows.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedShow) => {
        res.send(updatedShow)
    })
})

//////// CREATE ////////
showsRouter.post('/', (req, res) => {
    Shows.create(req.body, (error, createdShow) => {
        res.redirect('/shows')
    })
})

//////// EDIT /////////
showsRouter.get('/:id/edit', (req, res) => {
    Shows.findById(req.params.id, (error, foundShow) => {
        res.render('shows/edit.ejs', {
            show: foundShow
        })
    })
})

/////// SHOW /////////
showsRouter.get('/:id', (req, res) => {
    Shows.findById(req.params.id, (error, foundShow) => {
        res.render('shows/show.ejs', {
            show: foundShow
        })
    })
})

module.exports = showsRouter;