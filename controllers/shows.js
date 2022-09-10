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

//////// UPDATE ///////

//////// CREATE ////////

//////// EDIT /////////

/////// SHOW /////////

module.exports = showsRouter;