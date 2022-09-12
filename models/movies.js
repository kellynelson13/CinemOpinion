import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    img: String,
    writing: Number,
    direction: Number,
    cinematography: Number,
    acting: Number,
    editing: Number,
    sound: Number,
    soundtrack: Number,
    production_design: Number,
    casting: Number,
    effects: Number,
    overall: Number,
    review: String,
    review_author: String,
})

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

