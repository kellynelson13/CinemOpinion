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

//////// CREATE ////////
showsRouter.post('/', (req, res) => {
    Shows.create(req.body, (error, createdShow) => {
        res.redirect('/shows')
    })
})

//////// EDIT /////////

/////// SHOW /////////

module.exports = showsRouter;