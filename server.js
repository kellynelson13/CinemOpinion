//=========================
////// DEPENDENCIES ////////
//=========================
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const db = mongoose.connection;
const moviesController = require('./controllers/movies.js')
const showsController = require('./controllers/shows.js')

//==================
//// PORT///////
//=================
const PORT = process.env.PORT || 3000;

//==================
////// DATABASE ////
//==================
const MONGODB_URI = process.env.MONGODB_URI;

//===========================
/// CONNECT TO MONGODB AND ERROR HANDLING ///
//===========================
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true }
    );
    
    // Error / success
    db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
    db.on('connected', () => console.log('mongod connected'));
    db.on('disconnected', () => console.log('mongod disconnected'));

//===============================
//////// MIDDLEWARE /////////////
//===============================
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.use('/movies', moviesController);
app.use('/shows', showsController);

//=====================
/////// ROUTES ///////
//=====================
app.get('/', (req, res) => {
    res.render('index.ejs')
});

//======================
////// LISTENER ////////
//======================
app.listen(PORT, () => {
    console.log("Express is listening carefully on port:", PORT);
});