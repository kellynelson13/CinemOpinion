//=========================
////// DEPENDENCIES ////////
//=========================
import 'dotenv/config.js'
import express from 'express';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
const app = express();
const db = mongoose.connection;
import moviesController from './controllers/movies.js';
import showsController from './controllers/shows.js';
import postersController from './controllers/posters.js';


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
app.use('/posters', postersController);

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