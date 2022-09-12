import express from 'express';
const showsRouter = express.Router();
import Shows from "../models/shows.js";

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
        const sum = updatedShow.writing + 
        updatedShow.direction +
        updatedShow.cinematography +
        updatedShow.acting +
        updatedShow.editing +
        updatedShow.sound +
        updatedShow.soundtrack +
        updatedShow.production_design +
        updatedShow.casting +
        updatedShow.effects;
        
        updatedShow.overall = sum / 10;
        updatedShow.save();
        res.redirect(`/shows/${req.params.id}`)
    })
})

//////// CREATE ////////
showsRouter.post('/', (req, res) => {
    Shows.create(req.body, (error, createdShow) => {
        const sum = createdShow.writing + 
        createdShow.direction +
        createdShow.cinematography +
        createdShow.acting +
        createdShow.editing +
        createdShow.sound +
        createdShow.soundtrack +
        createdShow.production_design +
        createdShow.casting +
        createdShow.effects;
        
        createdShow.overall = sum / 10;
        createdShow.save();
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

export default showsRouter;